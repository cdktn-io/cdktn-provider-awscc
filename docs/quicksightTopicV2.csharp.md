# `quicksightTopicV2` Submodule <a name="`quicksightTopicV2` Submodule" id="@cdktn/provider-awscc.quicksightTopicV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightTopicV2 <a name="QuicksightTopicV2" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2 awscc_quicksight_topic_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightTopicV2(Construct Scope, string Id, QuicksightTopicV2Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config">QuicksightTopicV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config">QuicksightTopicV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putCustomInstructions">PutCustomInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putDataSetRelations">PutDataSetRelations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putDataSets">PutDataSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putPermissions">PutPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetCustomInstructions">ResetCustomInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetDataSetRelations">ResetDataSetRelations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetDataSets">ResetDataSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetFolderArns">ResetFolderArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetTopicId">ResetTopicId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomInstructions` <a name="PutCustomInstructions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putCustomInstructions"></a>

```csharp
private void PutCustomInstructions(QuicksightTopicV2CustomInstructions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putCustomInstructions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a>

---

##### `PutDataSetRelations` <a name="PutDataSetRelations" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putDataSetRelations"></a>

```csharp
private void PutDataSetRelations(IResolvable|QuicksightTopicV2DataSetRelations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putDataSetRelations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>[]

---

##### `PutDataSets` <a name="PutDataSets" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putDataSets"></a>

```csharp
private void PutDataSets(IResolvable|QuicksightTopicV2DataSets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putDataSets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>[]

---

##### `PutPermissions` <a name="PutPermissions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putPermissions"></a>

```csharp
private void PutPermissions(IResolvable|QuicksightTopicV2Permissions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putPermissions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putTags"></a>

```csharp
private void PutTags(IResolvable|QuicksightTopicV2Tags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>[]

---

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetAwsAccountId"></a>

```csharp
private void ResetAwsAccountId()
```

##### `ResetCustomInstructions` <a name="ResetCustomInstructions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetCustomInstructions"></a>

```csharp
private void ResetCustomInstructions()
```

##### `ResetDataSetRelations` <a name="ResetDataSetRelations" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetDataSetRelations"></a>

```csharp
private void ResetDataSetRelations()
```

##### `ResetDataSets` <a name="ResetDataSets" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetDataSets"></a>

```csharp
private void ResetDataSets()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFolderArns` <a name="ResetFolderArns" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetFolderArns"></a>

```csharp
private void ResetFolderArns()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetPermissions"></a>

```csharp
private void ResetPermissions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTopicId` <a name="ResetTopicId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetTopicId"></a>

```csharp
private void ResetTopicId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightTopicV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightTopicV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightTopicV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightTopicV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightTopicV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a QuicksightTopicV2 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuicksightTopicV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuicksightTopicV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightTopicV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.customInstructions">CustomInstructions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference">QuicksightTopicV2CustomInstructionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSetRelations">DataSetRelations</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList">QuicksightTopicV2DataSetRelationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSets">DataSets</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList">QuicksightTopicV2DataSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.permissions">Permissions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList">QuicksightTopicV2PermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList">QuicksightTopicV2TagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.customInstructionsInput">CustomInstructionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSetRelationsInput">DataSetRelationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSetsInput">DataSetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.folderArnsInput">FolderArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.permissionsInput">PermissionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.topicIdInput">TopicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.folderArns">FolderArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.topicId">TopicId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CustomInstructions`<sup>Required</sup> <a name="CustomInstructions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.customInstructions"></a>

```csharp
public QuicksightTopicV2CustomInstructionsOutputReference CustomInstructions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference">QuicksightTopicV2CustomInstructionsOutputReference</a>

---

##### `DataSetRelations`<sup>Required</sup> <a name="DataSetRelations" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSetRelations"></a>

```csharp
public QuicksightTopicV2DataSetRelationsList DataSetRelations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList">QuicksightTopicV2DataSetRelationsList</a>

---

##### `DataSets`<sup>Required</sup> <a name="DataSets" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSets"></a>

```csharp
public QuicksightTopicV2DataSetsList DataSets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList">QuicksightTopicV2DataSetsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.permissions"></a>

```csharp
public QuicksightTopicV2PermissionsList Permissions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList">QuicksightTopicV2PermissionsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.tags"></a>

```csharp
public QuicksightTopicV2TagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList">QuicksightTopicV2TagsList</a>

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.awsAccountIdInput"></a>

```csharp
public string AwsAccountIdInput { get; }
```

- *Type:* string

---

##### `CustomInstructionsInput`<sup>Optional</sup> <a name="CustomInstructionsInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.customInstructionsInput"></a>

```csharp
public IResolvable|QuicksightTopicV2CustomInstructions CustomInstructionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a>

---

##### `DataSetRelationsInput`<sup>Optional</sup> <a name="DataSetRelationsInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSetRelationsInput"></a>

```csharp
public IResolvable|QuicksightTopicV2DataSetRelations[] DataSetRelationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>[]

---

##### `DataSetsInput`<sup>Optional</sup> <a name="DataSetsInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSetsInput"></a>

```csharp
public IResolvable|QuicksightTopicV2DataSets[] DataSetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FolderArnsInput`<sup>Optional</sup> <a name="FolderArnsInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.folderArnsInput"></a>

```csharp
public string[] FolderArnsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.permissionsInput"></a>

```csharp
public IResolvable|QuicksightTopicV2Permissions[] PermissionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.tagsInput"></a>

```csharp
public IResolvable|QuicksightTopicV2Tags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>[]

---

##### `TopicIdInput`<sup>Optional</sup> <a name="TopicIdInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.topicIdInput"></a>

```csharp
public string TopicIdInput { get; }
```

- *Type:* string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FolderArns`<sup>Required</sup> <a name="FolderArns" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.folderArns"></a>

```csharp
public string[] FolderArns { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TopicId`<sup>Required</sup> <a name="TopicId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.topicId"></a>

```csharp
public string TopicId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightTopicV2Config <a name="QuicksightTopicV2Config" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightTopicV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AwsAccountId = null,
    QuicksightTopicV2CustomInstructions CustomInstructions = null,
    IResolvable|QuicksightTopicV2DataSetRelations[] DataSetRelations = null,
    IResolvable|QuicksightTopicV2DataSets[] DataSets = null,
    string Description = null,
    string[] FolderArns = null,
    string Name = null,
    IResolvable|QuicksightTopicV2Permissions[] Permissions = null,
    IResolvable|QuicksightTopicV2Tags[] Tags = null,
    string TopicId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#aws_account_id QuicksightTopicV2#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.customInstructions">CustomInstructions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#custom_instructions QuicksightTopicV2#custom_instructions}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.dataSetRelations">DataSetRelations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#data_set_relations QuicksightTopicV2#data_set_relations}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.dataSets">DataSets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#data_sets QuicksightTopicV2#data_sets}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#description QuicksightTopicV2#description}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.folderArns">FolderArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#folder_arns QuicksightTopicV2#folder_arns}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#name QuicksightTopicV2#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.permissions">Permissions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#permissions QuicksightTopicV2#permissions}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#tags QuicksightTopicV2#tags}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.topicId">TopicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#topic_id QuicksightTopicV2#topic_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#aws_account_id QuicksightTopicV2#aws_account_id}.

---

##### `CustomInstructions`<sup>Optional</sup> <a name="CustomInstructions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.customInstructions"></a>

```csharp
public QuicksightTopicV2CustomInstructions CustomInstructions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#custom_instructions QuicksightTopicV2#custom_instructions}.

---

##### `DataSetRelations`<sup>Optional</sup> <a name="DataSetRelations" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.dataSetRelations"></a>

```csharp
public IResolvable|QuicksightTopicV2DataSetRelations[] DataSetRelations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#data_set_relations QuicksightTopicV2#data_set_relations}.

---

##### `DataSets`<sup>Optional</sup> <a name="DataSets" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.dataSets"></a>

```csharp
public IResolvable|QuicksightTopicV2DataSets[] DataSets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#data_sets QuicksightTopicV2#data_sets}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#description QuicksightTopicV2#description}.

---

##### `FolderArns`<sup>Optional</sup> <a name="FolderArns" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.folderArns"></a>

```csharp
public string[] FolderArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#folder_arns QuicksightTopicV2#folder_arns}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#name QuicksightTopicV2#name}.

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.permissions"></a>

```csharp
public IResolvable|QuicksightTopicV2Permissions[] Permissions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#permissions QuicksightTopicV2#permissions}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.tags"></a>

```csharp
public IResolvable|QuicksightTopicV2Tags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#tags QuicksightTopicV2#tags}.

---

##### `TopicId`<sup>Optional</sup> <a name="TopicId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.topicId"></a>

```csharp
public string TopicId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#topic_id QuicksightTopicV2#topic_id}.

---

### QuicksightTopicV2CustomInstructions <a name="QuicksightTopicV2CustomInstructions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightTopicV2CustomInstructions {
    string CustomInstructionsString = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions.property.customInstructionsString">CustomInstructionsString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#custom_instructions_string QuicksightTopicV2#custom_instructions_string}. |

---

##### `CustomInstructionsString`<sup>Optional</sup> <a name="CustomInstructionsString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions.property.customInstructionsString"></a>

```csharp
public string CustomInstructionsString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#custom_instructions_string QuicksightTopicV2#custom_instructions_string}.

---

### QuicksightTopicV2DataSetRelations <a name="QuicksightTopicV2DataSetRelations" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightTopicV2DataSetRelations {
    QuicksightTopicV2DataSetRelationsLeft Left = null,
    QuicksightTopicV2DataSetRelationsRight Right = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations.property.left">Left</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft">QuicksightTopicV2DataSetRelationsLeft</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#left QuicksightTopicV2#left}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations.property.right">Right</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight">QuicksightTopicV2DataSetRelationsRight</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#right QuicksightTopicV2#right}. |

---

##### `Left`<sup>Optional</sup> <a name="Left" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations.property.left"></a>

```csharp
public QuicksightTopicV2DataSetRelationsLeft Left { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft">QuicksightTopicV2DataSetRelationsLeft</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#left QuicksightTopicV2#left}.

---

##### `Right`<sup>Optional</sup> <a name="Right" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations.property.right"></a>

```csharp
public QuicksightTopicV2DataSetRelationsRight Right { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight">QuicksightTopicV2DataSetRelationsRight</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#right QuicksightTopicV2#right}.

---

### QuicksightTopicV2DataSetRelationsLeft <a name="QuicksightTopicV2DataSetRelationsLeft" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightTopicV2DataSetRelationsLeft {
    string[] ColumnNames = null,
    string DataSetArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#column_names QuicksightTopicV2#column_names}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft.property.dataSetArn">DataSetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#data_set_arn QuicksightTopicV2#data_set_arn}. |

---

##### `ColumnNames`<sup>Optional</sup> <a name="ColumnNames" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#column_names QuicksightTopicV2#column_names}.

---

##### `DataSetArn`<sup>Optional</sup> <a name="DataSetArn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft.property.dataSetArn"></a>

```csharp
public string DataSetArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#data_set_arn QuicksightTopicV2#data_set_arn}.

---

### QuicksightTopicV2DataSetRelationsRight <a name="QuicksightTopicV2DataSetRelationsRight" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightTopicV2DataSetRelationsRight {
    string[] ColumnNames = null,
    string DataSetArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#column_names QuicksightTopicV2#column_names}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight.property.dataSetArn">DataSetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#data_set_arn QuicksightTopicV2#data_set_arn}. |

---

##### `ColumnNames`<sup>Optional</sup> <a name="ColumnNames" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#column_names QuicksightTopicV2#column_names}.

---

##### `DataSetArn`<sup>Optional</sup> <a name="DataSetArn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight.property.dataSetArn"></a>

```csharp
public string DataSetArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#data_set_arn QuicksightTopicV2#data_set_arn}.

---

### QuicksightTopicV2DataSets <a name="QuicksightTopicV2DataSets" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightTopicV2DataSets {
    string DataSetArn = null,
    string DataSetName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets.property.dataSetArn">DataSetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#data_set_arn QuicksightTopicV2#data_set_arn}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets.property.dataSetName">DataSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#data_set_name QuicksightTopicV2#data_set_name}. |

---

##### `DataSetArn`<sup>Optional</sup> <a name="DataSetArn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets.property.dataSetArn"></a>

```csharp
public string DataSetArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#data_set_arn QuicksightTopicV2#data_set_arn}.

---

##### `DataSetName`<sup>Optional</sup> <a name="DataSetName" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets.property.dataSetName"></a>

```csharp
public string DataSetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#data_set_name QuicksightTopicV2#data_set_name}.

---

### QuicksightTopicV2Permissions <a name="QuicksightTopicV2Permissions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightTopicV2Permissions {
    string[] Actions = null,
    string Principal = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions.property.actions">Actions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#actions QuicksightTopicV2#actions}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions.property.principal">Principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#principal QuicksightTopicV2#principal}. |

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions.property.actions"></a>

```csharp
public string[] Actions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#actions QuicksightTopicV2#actions}.

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions.property.principal"></a>

```csharp
public string Principal { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#principal QuicksightTopicV2#principal}.

---

### QuicksightTopicV2Tags <a name="QuicksightTopicV2Tags" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightTopicV2Tags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags.property.key">Key</a></code> | <code>string</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags.property.value">Value</a></code> | <code>string</code> | <p>Tag value.</p>. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#key QuicksightTopicV2#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_topic_v2#value QuicksightTopicV2#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightTopicV2CustomInstructionsOutputReference <a name="QuicksightTopicV2CustomInstructionsOutputReference" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightTopicV2CustomInstructionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.resetCustomInstructionsString">ResetCustomInstructionsString</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomInstructionsString` <a name="ResetCustomInstructionsString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.resetCustomInstructionsString"></a>

```csharp
private void ResetCustomInstructionsString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.customInstructionsStringInput">CustomInstructionsStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.customInstructionsString">CustomInstructionsString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomInstructionsStringInput`<sup>Optional</sup> <a name="CustomInstructionsStringInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.customInstructionsStringInput"></a>

```csharp
public string CustomInstructionsStringInput { get; }
```

- *Type:* string

---

##### `CustomInstructionsString`<sup>Required</sup> <a name="CustomInstructionsString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.customInstructionsString"></a>

```csharp
public string CustomInstructionsString { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightTopicV2CustomInstructions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a>

---


### QuicksightTopicV2DataSetRelationsLeftOutputReference <a name="QuicksightTopicV2DataSetRelationsLeftOutputReference" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightTopicV2DataSetRelationsLeftOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.resetColumnNames">ResetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.resetDataSetArn">ResetDataSetArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnNames` <a name="ResetColumnNames" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.resetColumnNames"></a>

```csharp
private void ResetColumnNames()
```

##### `ResetDataSetArn` <a name="ResetDataSetArn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.resetDataSetArn"></a>

```csharp
private void ResetDataSetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.columnNamesInput">ColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.dataSetArnInput">DataSetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.dataSetArn">DataSetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft">QuicksightTopicV2DataSetRelationsLeft</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNamesInput`<sup>Optional</sup> <a name="ColumnNamesInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.columnNamesInput"></a>

```csharp
public string[] ColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `DataSetArnInput`<sup>Optional</sup> <a name="DataSetArnInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.dataSetArnInput"></a>

```csharp
public string DataSetArnInput { get; }
```

- *Type:* string

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; }
```

- *Type:* string[]

---

##### `DataSetArn`<sup>Required</sup> <a name="DataSetArn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.dataSetArn"></a>

```csharp
public string DataSetArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightTopicV2DataSetRelationsLeft InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft">QuicksightTopicV2DataSetRelationsLeft</a>

---


### QuicksightTopicV2DataSetRelationsList <a name="QuicksightTopicV2DataSetRelationsList" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightTopicV2DataSetRelationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.get"></a>

```csharp
private QuicksightTopicV2DataSetRelationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.property.internalValue"></a>

```csharp
public IResolvable|QuicksightTopicV2DataSetRelations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>[]

---


### QuicksightTopicV2DataSetRelationsOutputReference <a name="QuicksightTopicV2DataSetRelationsOutputReference" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightTopicV2DataSetRelationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.putLeft">PutLeft</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.putRight">PutRight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.resetLeft">ResetLeft</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.resetRight">ResetRight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLeft` <a name="PutLeft" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.putLeft"></a>

```csharp
private void PutLeft(QuicksightTopicV2DataSetRelationsLeft Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.putLeft.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft">QuicksightTopicV2DataSetRelationsLeft</a>

---

##### `PutRight` <a name="PutRight" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.putRight"></a>

```csharp
private void PutRight(QuicksightTopicV2DataSetRelationsRight Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.putRight.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight">QuicksightTopicV2DataSetRelationsRight</a>

---

##### `ResetLeft` <a name="ResetLeft" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.resetLeft"></a>

```csharp
private void ResetLeft()
```

##### `ResetRight` <a name="ResetRight" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.resetRight"></a>

```csharp
private void ResetRight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.left">Left</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference">QuicksightTopicV2DataSetRelationsLeftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.right">Right</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference">QuicksightTopicV2DataSetRelationsRightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.leftInput">LeftInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft">QuicksightTopicV2DataSetRelationsLeft</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.rightInput">RightInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight">QuicksightTopicV2DataSetRelationsRight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Left`<sup>Required</sup> <a name="Left" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.left"></a>

```csharp
public QuicksightTopicV2DataSetRelationsLeftOutputReference Left { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference">QuicksightTopicV2DataSetRelationsLeftOutputReference</a>

---

##### `Right`<sup>Required</sup> <a name="Right" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.right"></a>

```csharp
public QuicksightTopicV2DataSetRelationsRightOutputReference Right { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference">QuicksightTopicV2DataSetRelationsRightOutputReference</a>

---

##### `LeftInput`<sup>Optional</sup> <a name="LeftInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.leftInput"></a>

```csharp
public IResolvable|QuicksightTopicV2DataSetRelationsLeft LeftInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft">QuicksightTopicV2DataSetRelationsLeft</a>

---

##### `RightInput`<sup>Optional</sup> <a name="RightInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.rightInput"></a>

```csharp
public IResolvable|QuicksightTopicV2DataSetRelationsRight RightInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight">QuicksightTopicV2DataSetRelationsRight</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightTopicV2DataSetRelations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>

---


### QuicksightTopicV2DataSetRelationsRightOutputReference <a name="QuicksightTopicV2DataSetRelationsRightOutputReference" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightTopicV2DataSetRelationsRightOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.resetColumnNames">ResetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.resetDataSetArn">ResetDataSetArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnNames` <a name="ResetColumnNames" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.resetColumnNames"></a>

```csharp
private void ResetColumnNames()
```

##### `ResetDataSetArn` <a name="ResetDataSetArn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.resetDataSetArn"></a>

```csharp
private void ResetDataSetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.columnNamesInput">ColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.dataSetArnInput">DataSetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.dataSetArn">DataSetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight">QuicksightTopicV2DataSetRelationsRight</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNamesInput`<sup>Optional</sup> <a name="ColumnNamesInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.columnNamesInput"></a>

```csharp
public string[] ColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `DataSetArnInput`<sup>Optional</sup> <a name="DataSetArnInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.dataSetArnInput"></a>

```csharp
public string DataSetArnInput { get; }
```

- *Type:* string

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; }
```

- *Type:* string[]

---

##### `DataSetArn`<sup>Required</sup> <a name="DataSetArn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.dataSetArn"></a>

```csharp
public string DataSetArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightTopicV2DataSetRelationsRight InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight">QuicksightTopicV2DataSetRelationsRight</a>

---


### QuicksightTopicV2DataSetsList <a name="QuicksightTopicV2DataSetsList" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightTopicV2DataSetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.get"></a>

```csharp
private QuicksightTopicV2DataSetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.property.internalValue"></a>

```csharp
public IResolvable|QuicksightTopicV2DataSets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>[]

---


### QuicksightTopicV2DataSetsOutputReference <a name="QuicksightTopicV2DataSetsOutputReference" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightTopicV2DataSetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.resetDataSetArn">ResetDataSetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.resetDataSetName">ResetDataSetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataSetArn` <a name="ResetDataSetArn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.resetDataSetArn"></a>

```csharp
private void ResetDataSetArn()
```

##### `ResetDataSetName` <a name="ResetDataSetName" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.resetDataSetName"></a>

```csharp
private void ResetDataSetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetArnInput">DataSetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetNameInput">DataSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetArn">DataSetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetName">DataSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataSetArnInput`<sup>Optional</sup> <a name="DataSetArnInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetArnInput"></a>

```csharp
public string DataSetArnInput { get; }
```

- *Type:* string

---

##### `DataSetNameInput`<sup>Optional</sup> <a name="DataSetNameInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetNameInput"></a>

```csharp
public string DataSetNameInput { get; }
```

- *Type:* string

---

##### `DataSetArn`<sup>Required</sup> <a name="DataSetArn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetArn"></a>

```csharp
public string DataSetArn { get; }
```

- *Type:* string

---

##### `DataSetName`<sup>Required</sup> <a name="DataSetName" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetName"></a>

```csharp
public string DataSetName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightTopicV2DataSets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>

---


### QuicksightTopicV2PermissionsList <a name="QuicksightTopicV2PermissionsList" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightTopicV2PermissionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.get"></a>

```csharp
private QuicksightTopicV2PermissionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.property.internalValue"></a>

```csharp
public IResolvable|QuicksightTopicV2Permissions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>[]

---


### QuicksightTopicV2PermissionsOutputReference <a name="QuicksightTopicV2PermissionsOutputReference" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightTopicV2PermissionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.resetPrincipal">ResetPrincipal</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActions` <a name="ResetActions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.resetActions"></a>

```csharp
private void ResetActions()
```

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.resetPrincipal"></a>

```csharp
private void ResetPrincipal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.actionsInput">ActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.principalInput">PrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.actions">Actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.principal">Principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.actionsInput"></a>

```csharp
public string[] ActionsInput { get; }
```

- *Type:* string[]

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.principalInput"></a>

```csharp
public string PrincipalInput { get; }
```

- *Type:* string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.actions"></a>

```csharp
public string[] Actions { get; }
```

- *Type:* string[]

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightTopicV2Permissions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>

---


### QuicksightTopicV2TagsList <a name="QuicksightTopicV2TagsList" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightTopicV2TagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.get"></a>

```csharp
private QuicksightTopicV2TagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.property.internalValue"></a>

```csharp
public IResolvable|QuicksightTopicV2Tags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>[]

---


### QuicksightTopicV2TagsOutputReference <a name="QuicksightTopicV2TagsOutputReference" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightTopicV2TagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightTopicV2Tags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>

---



