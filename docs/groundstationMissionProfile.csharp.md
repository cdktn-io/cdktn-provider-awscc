# `groundstationMissionProfile` Submodule <a name="`groundstationMissionProfile` Submodule" id="@cdktn/provider-awscc.groundstationMissionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroundstationMissionProfile <a name="GroundstationMissionProfile" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_mission_profile awscc_groundstation_mission_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationMissionProfile(Construct Scope, string Id, GroundstationMissionProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig">GroundstationMissionProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig">GroundstationMissionProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putDataflowEdges">PutDataflowEdges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putStreamsKmsKey">PutStreamsKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetContactPostPassDurationSeconds">ResetContactPostPassDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetContactPrePassDurationSeconds">ResetContactPrePassDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetStreamsKmsKey">ResetStreamsKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetStreamsKmsRole">ResetStreamsKmsRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetTelemetrySinkConfigArn">ResetTelemetrySinkConfigArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataflowEdges` <a name="PutDataflowEdges" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putDataflowEdges"></a>

```csharp
private void PutDataflowEdges(IResolvable|GroundstationMissionProfileDataflowEdges[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putDataflowEdges.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>[]

---

##### `PutStreamsKmsKey` <a name="PutStreamsKmsKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putStreamsKmsKey"></a>

```csharp
private void PutStreamsKmsKey(GroundstationMissionProfileStreamsKmsKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putStreamsKmsKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putTags"></a>

```csharp
private void PutTags(IResolvable|GroundstationMissionProfileTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>[]

---

##### `ResetContactPostPassDurationSeconds` <a name="ResetContactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetContactPostPassDurationSeconds"></a>

```csharp
private void ResetContactPostPassDurationSeconds()
```

##### `ResetContactPrePassDurationSeconds` <a name="ResetContactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetContactPrePassDurationSeconds"></a>

```csharp
private void ResetContactPrePassDurationSeconds()
```

##### `ResetStreamsKmsKey` <a name="ResetStreamsKmsKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetStreamsKmsKey"></a>

```csharp
private void ResetStreamsKmsKey()
```

##### `ResetStreamsKmsRole` <a name="ResetStreamsKmsRole" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetStreamsKmsRole"></a>

```csharp
private void ResetStreamsKmsRole()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTelemetrySinkConfigArn` <a name="ResetTelemetrySinkConfigArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetTelemetrySinkConfigArn"></a>

```csharp
private void ResetTelemetrySinkConfigArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GroundstationMissionProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GroundstationMissionProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GroundstationMissionProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GroundstationMissionProfile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GroundstationMissionProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GroundstationMissionProfile resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GroundstationMissionProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GroundstationMissionProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_mission_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GroundstationMissionProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.dataflowEdges">DataflowEdges</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList">GroundstationMissionProfileDataflowEdgesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.missionProfileId">MissionProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsKey">StreamsKmsKey</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference">GroundstationMissionProfileStreamsKmsKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList">GroundstationMissionProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPostPassDurationSecondsInput">ContactPostPassDurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPrePassDurationSecondsInput">ContactPrePassDurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.dataflowEdgesInput">DataflowEdgesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.minimumViableContactDurationSecondsInput">MinimumViableContactDurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsKeyInput">StreamsKmsKeyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsRoleInput">StreamsKmsRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.telemetrySinkConfigArnInput">TelemetrySinkConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.trackingConfigArnInput">TrackingConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPostPassDurationSeconds">ContactPostPassDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPrePassDurationSeconds">ContactPrePassDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.minimumViableContactDurationSeconds">MinimumViableContactDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsRole">StreamsKmsRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.telemetrySinkConfigArn">TelemetrySinkConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.trackingConfigArn">TrackingConfigArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DataflowEdges`<sup>Required</sup> <a name="DataflowEdges" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.dataflowEdges"></a>

```csharp
public GroundstationMissionProfileDataflowEdgesList DataflowEdges { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList">GroundstationMissionProfileDataflowEdgesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MissionProfileId`<sup>Required</sup> <a name="MissionProfileId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.missionProfileId"></a>

```csharp
public string MissionProfileId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `StreamsKmsKey`<sup>Required</sup> <a name="StreamsKmsKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsKey"></a>

```csharp
public GroundstationMissionProfileStreamsKmsKeyOutputReference StreamsKmsKey { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference">GroundstationMissionProfileStreamsKmsKeyOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.tags"></a>

```csharp
public GroundstationMissionProfileTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList">GroundstationMissionProfileTagsList</a>

---

##### `ContactPostPassDurationSecondsInput`<sup>Optional</sup> <a name="ContactPostPassDurationSecondsInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPostPassDurationSecondsInput"></a>

```csharp
public double ContactPostPassDurationSecondsInput { get; }
```

- *Type:* double

---

##### `ContactPrePassDurationSecondsInput`<sup>Optional</sup> <a name="ContactPrePassDurationSecondsInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPrePassDurationSecondsInput"></a>

```csharp
public double ContactPrePassDurationSecondsInput { get; }
```

- *Type:* double

---

##### `DataflowEdgesInput`<sup>Optional</sup> <a name="DataflowEdgesInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.dataflowEdgesInput"></a>

```csharp
public IResolvable|GroundstationMissionProfileDataflowEdges[] DataflowEdgesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>[]

---

##### `MinimumViableContactDurationSecondsInput`<sup>Optional</sup> <a name="MinimumViableContactDurationSecondsInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.minimumViableContactDurationSecondsInput"></a>

```csharp
public double MinimumViableContactDurationSecondsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StreamsKmsKeyInput`<sup>Optional</sup> <a name="StreamsKmsKeyInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsKeyInput"></a>

```csharp
public IResolvable|GroundstationMissionProfileStreamsKmsKey StreamsKmsKeyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a>

---

##### `StreamsKmsRoleInput`<sup>Optional</sup> <a name="StreamsKmsRoleInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsRoleInput"></a>

```csharp
public string StreamsKmsRoleInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.tagsInput"></a>

```csharp
public IResolvable|GroundstationMissionProfileTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>[]

---

##### `TelemetrySinkConfigArnInput`<sup>Optional</sup> <a name="TelemetrySinkConfigArnInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.telemetrySinkConfigArnInput"></a>

```csharp
public string TelemetrySinkConfigArnInput { get; }
```

- *Type:* string

---

##### `TrackingConfigArnInput`<sup>Optional</sup> <a name="TrackingConfigArnInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.trackingConfigArnInput"></a>

```csharp
public string TrackingConfigArnInput { get; }
```

- *Type:* string

---

##### `ContactPostPassDurationSeconds`<sup>Required</sup> <a name="ContactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPostPassDurationSeconds"></a>

```csharp
public double ContactPostPassDurationSeconds { get; }
```

- *Type:* double

---

##### `ContactPrePassDurationSeconds`<sup>Required</sup> <a name="ContactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPrePassDurationSeconds"></a>

```csharp
public double ContactPrePassDurationSeconds { get; }
```

- *Type:* double

---

##### `MinimumViableContactDurationSeconds`<sup>Required</sup> <a name="MinimumViableContactDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.minimumViableContactDurationSeconds"></a>

```csharp
public double MinimumViableContactDurationSeconds { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StreamsKmsRole`<sup>Required</sup> <a name="StreamsKmsRole" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsRole"></a>

```csharp
public string StreamsKmsRole { get; }
```

- *Type:* string

---

##### `TelemetrySinkConfigArn`<sup>Required</sup> <a name="TelemetrySinkConfigArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.telemetrySinkConfigArn"></a>

```csharp
public string TelemetrySinkConfigArn { get; }
```

- *Type:* string

---

##### `TrackingConfigArn`<sup>Required</sup> <a name="TrackingConfigArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.trackingConfigArn"></a>

```csharp
public string TrackingConfigArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroundstationMissionProfileConfig <a name="GroundstationMissionProfileConfig" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationMissionProfileConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|GroundstationMissionProfileDataflowEdges[] DataflowEdges,
    double MinimumViableContactDurationSeconds,
    string Name,
    string TrackingConfigArn,
    double ContactPostPassDurationSeconds = null,
    double ContactPrePassDurationSeconds = null,
    GroundstationMissionProfileStreamsKmsKey StreamsKmsKey = null,
    string StreamsKmsRole = null,
    IResolvable|GroundstationMissionProfileTags[] Tags = null,
    string TelemetrySinkConfigArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.dataflowEdges">DataflowEdges</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_mission_profile#dataflow_edges GroundstationMissionProfile#dataflow_edges}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.minimumViableContactDurationSeconds">MinimumViableContactDurationSeconds</a></code> | <code>double</code> | Visibilities with shorter duration than the specified minimum viable contact duration will be ignored when searching for available contacts. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.name">Name</a></code> | <code>string</code> | A name used to identify a mission profile. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.trackingConfigArn">TrackingConfigArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_mission_profile#tracking_config_arn GroundstationMissionProfile#tracking_config_arn}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.contactPostPassDurationSeconds">ContactPostPassDurationSeconds</a></code> | <code>double</code> | Post-pass time needed after the contact. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.contactPrePassDurationSeconds">ContactPrePassDurationSeconds</a></code> | <code>double</code> | Pre-pass time needed before the contact. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.streamsKmsKey">StreamsKmsKey</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a></code> | The ARN of a KMS Key used for encrypting data during transmission from the source to destination locations. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.streamsKmsRole">StreamsKmsRole</a></code> | <code>string</code> | The ARN of the KMS Key or Alias Key role used to define permissions on KMS Key usage. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_mission_profile#tags GroundstationMissionProfile#tags}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.telemetrySinkConfigArn">TelemetrySinkConfigArn</a></code> | <code>string</code> | ARN of a Config resource of type TelemetrySinkConfig used for telemetry data sink configuration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataflowEdges`<sup>Required</sup> <a name="DataflowEdges" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.dataflowEdges"></a>

```csharp
public IResolvable|GroundstationMissionProfileDataflowEdges[] DataflowEdges { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_mission_profile#dataflow_edges GroundstationMissionProfile#dataflow_edges}.

---

##### `MinimumViableContactDurationSeconds`<sup>Required</sup> <a name="MinimumViableContactDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.minimumViableContactDurationSeconds"></a>

```csharp
public double MinimumViableContactDurationSeconds { get; set; }
```

- *Type:* double

Visibilities with shorter duration than the specified minimum viable contact duration will be ignored when searching for available contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_mission_profile#minimum_viable_contact_duration_seconds GroundstationMissionProfile#minimum_viable_contact_duration_seconds}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A name used to identify a mission profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_mission_profile#name GroundstationMissionProfile#name}

---

##### `TrackingConfigArn`<sup>Required</sup> <a name="TrackingConfigArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.trackingConfigArn"></a>

```csharp
public string TrackingConfigArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_mission_profile#tracking_config_arn GroundstationMissionProfile#tracking_config_arn}.

---

##### `ContactPostPassDurationSeconds`<sup>Optional</sup> <a name="ContactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.contactPostPassDurationSeconds"></a>

```csharp
public double ContactPostPassDurationSeconds { get; set; }
```

- *Type:* double

Post-pass time needed after the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_mission_profile#contact_post_pass_duration_seconds GroundstationMissionProfile#contact_post_pass_duration_seconds}

---

##### `ContactPrePassDurationSeconds`<sup>Optional</sup> <a name="ContactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.contactPrePassDurationSeconds"></a>

```csharp
public double ContactPrePassDurationSeconds { get; set; }
```

- *Type:* double

Pre-pass time needed before the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_mission_profile#contact_pre_pass_duration_seconds GroundstationMissionProfile#contact_pre_pass_duration_seconds}

---

##### `StreamsKmsKey`<sup>Optional</sup> <a name="StreamsKmsKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.streamsKmsKey"></a>

```csharp
public GroundstationMissionProfileStreamsKmsKey StreamsKmsKey { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a>

The ARN of a KMS Key used for encrypting data during transmission from the source to destination locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_mission_profile#streams_kms_key GroundstationMissionProfile#streams_kms_key}

---

##### `StreamsKmsRole`<sup>Optional</sup> <a name="StreamsKmsRole" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.streamsKmsRole"></a>

```csharp
public string StreamsKmsRole { get; set; }
```

- *Type:* string

The ARN of the KMS Key or Alias Key role used to define permissions on KMS Key usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_mission_profile#streams_kms_role GroundstationMissionProfile#streams_kms_role}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.tags"></a>

```csharp
public IResolvable|GroundstationMissionProfileTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_mission_profile#tags GroundstationMissionProfile#tags}.

---

##### `TelemetrySinkConfigArn`<sup>Optional</sup> <a name="TelemetrySinkConfigArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.telemetrySinkConfigArn"></a>

```csharp
public string TelemetrySinkConfigArn { get; set; }
```

- *Type:* string

ARN of a Config resource of type TelemetrySinkConfig used for telemetry data sink configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_mission_profile#telemetry_sink_config_arn GroundstationMissionProfile#telemetry_sink_config_arn}

---

### GroundstationMissionProfileDataflowEdges <a name="GroundstationMissionProfileDataflowEdges" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationMissionProfileDataflowEdges {
    string Destination = null,
    string Source = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges.property.destination">Destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_mission_profile#destination GroundstationMissionProfile#destination}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_mission_profile#source GroundstationMissionProfile#source}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_mission_profile#destination GroundstationMissionProfile#destination}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_mission_profile#source GroundstationMissionProfile#source}.

---

### GroundstationMissionProfileStreamsKmsKey <a name="GroundstationMissionProfileStreamsKmsKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationMissionProfileStreamsKmsKey {
    string KmsAliasArn = null,
    string KmsAliasName = null,
    string KmsKeyArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.property.kmsAliasArn">KmsAliasArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_mission_profile#kms_alias_arn GroundstationMissionProfile#kms_alias_arn}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.property.kmsAliasName">KmsAliasName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_mission_profile#kms_alias_name GroundstationMissionProfile#kms_alias_name}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_mission_profile#kms_key_arn GroundstationMissionProfile#kms_key_arn}. |

---

##### `KmsAliasArn`<sup>Optional</sup> <a name="KmsAliasArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.property.kmsAliasArn"></a>

```csharp
public string KmsAliasArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_mission_profile#kms_alias_arn GroundstationMissionProfile#kms_alias_arn}.

---

##### `KmsAliasName`<sup>Optional</sup> <a name="KmsAliasName" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.property.kmsAliasName"></a>

```csharp
public string KmsAliasName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_mission_profile#kms_alias_name GroundstationMissionProfile#kms_alias_name}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_mission_profile#kms_key_arn GroundstationMissionProfile#kms_key_arn}.

---

### GroundstationMissionProfileTags <a name="GroundstationMissionProfileTags" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationMissionProfileTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_mission_profile#key GroundstationMissionProfile#key}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_mission_profile#value GroundstationMissionProfile#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_mission_profile#key GroundstationMissionProfile#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/groundstation_mission_profile#value GroundstationMissionProfile#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroundstationMissionProfileDataflowEdgesList <a name="GroundstationMissionProfileDataflowEdgesList" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationMissionProfileDataflowEdgesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.get"></a>

```csharp
private GroundstationMissionProfileDataflowEdgesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.property.internalValue"></a>

```csharp
public IResolvable|GroundstationMissionProfileDataflowEdges[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>[]

---


### GroundstationMissionProfileDataflowEdgesOutputReference <a name="GroundstationMissionProfileDataflowEdgesOutputReference" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationMissionProfileDataflowEdgesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resetDestination"></a>

```csharp
private void ResetDestination()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationMissionProfileDataflowEdges InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>

---


### GroundstationMissionProfileStreamsKmsKeyOutputReference <a name="GroundstationMissionProfileStreamsKmsKeyOutputReference" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationMissionProfileStreamsKmsKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resetKmsAliasArn">ResetKmsAliasArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resetKmsAliasName">ResetKmsAliasName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsAliasArn` <a name="ResetKmsAliasArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resetKmsAliasArn"></a>

```csharp
private void ResetKmsAliasArn()
```

##### `ResetKmsAliasName` <a name="ResetKmsAliasName" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resetKmsAliasName"></a>

```csharp
private void ResetKmsAliasName()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasArnInput">KmsAliasArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasNameInput">KmsAliasNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasArn">KmsAliasArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasName">KmsAliasName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsAliasArnInput`<sup>Optional</sup> <a name="KmsAliasArnInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasArnInput"></a>

```csharp
public string KmsAliasArnInput { get; }
```

- *Type:* string

---

##### `KmsAliasNameInput`<sup>Optional</sup> <a name="KmsAliasNameInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasNameInput"></a>

```csharp
public string KmsAliasNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `KmsAliasArn`<sup>Required</sup> <a name="KmsAliasArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasArn"></a>

```csharp
public string KmsAliasArn { get; }
```

- *Type:* string

---

##### `KmsAliasName`<sup>Required</sup> <a name="KmsAliasName" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasName"></a>

```csharp
public string KmsAliasName { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationMissionProfileStreamsKmsKey InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a>

---


### GroundstationMissionProfileTagsList <a name="GroundstationMissionProfileTagsList" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationMissionProfileTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.get"></a>

```csharp
private GroundstationMissionProfileTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.property.internalValue"></a>

```csharp
public IResolvable|GroundstationMissionProfileTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>[]

---


### GroundstationMissionProfileTagsOutputReference <a name="GroundstationMissionProfileTagsOutputReference" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GroundstationMissionProfileTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroundstationMissionProfileTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>

---



