# `smsvoiceRcsAgent` Submodule <a name="`smsvoiceRcsAgent` Submodule" id="@cdktn/provider-awscc.smsvoiceRcsAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmsvoiceRcsAgent <a name="SmsvoiceRcsAgent" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent awscc_smsvoice_rcs_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceRcsAgent(Construct Scope, string Id, SmsvoiceRcsAgentConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig">SmsvoiceRcsAgentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig">SmsvoiceRcsAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetDeletionProtectionEnabled">ResetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetOptOutListName">ResetOptOutListName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetSelfManagedOptOutsEnabled">ResetSelfManagedOptOutsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayChannelArn">ResetTwoWayChannelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayChannelRole">ResetTwoWayChannelRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayEnabled">ResetTwoWayEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayMediaS3BucketName">ResetTwoWayMediaS3BucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayMediaS3KeyPrefix">ResetTwoWayMediaS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayMediaS3Role">ResetTwoWayMediaS3Role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayRcsEventsEnabled">ResetTwoWayRcsEventsEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.putTags"></a>

```csharp
private void PutTags(IResolvable|SmsvoiceRcsAgentTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>[]

---

##### `ResetDeletionProtectionEnabled` <a name="ResetDeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetDeletionProtectionEnabled"></a>

```csharp
private void ResetDeletionProtectionEnabled()
```

##### `ResetOptOutListName` <a name="ResetOptOutListName" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetOptOutListName"></a>

```csharp
private void ResetOptOutListName()
```

##### `ResetSelfManagedOptOutsEnabled` <a name="ResetSelfManagedOptOutsEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetSelfManagedOptOutsEnabled"></a>

```csharp
private void ResetSelfManagedOptOutsEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTwoWayChannelArn` <a name="ResetTwoWayChannelArn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayChannelArn"></a>

```csharp
private void ResetTwoWayChannelArn()
```

##### `ResetTwoWayChannelRole` <a name="ResetTwoWayChannelRole" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayChannelRole"></a>

```csharp
private void ResetTwoWayChannelRole()
```

##### `ResetTwoWayEnabled` <a name="ResetTwoWayEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayEnabled"></a>

```csharp
private void ResetTwoWayEnabled()
```

##### `ResetTwoWayMediaS3BucketName` <a name="ResetTwoWayMediaS3BucketName" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayMediaS3BucketName"></a>

```csharp
private void ResetTwoWayMediaS3BucketName()
```

##### `ResetTwoWayMediaS3KeyPrefix` <a name="ResetTwoWayMediaS3KeyPrefix" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayMediaS3KeyPrefix"></a>

```csharp
private void ResetTwoWayMediaS3KeyPrefix()
```

##### `ResetTwoWayMediaS3Role` <a name="ResetTwoWayMediaS3Role" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayMediaS3Role"></a>

```csharp
private void ResetTwoWayMediaS3Role()
```

##### `ResetTwoWayRcsEventsEnabled` <a name="ResetTwoWayRcsEventsEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayRcsEventsEnabled"></a>

```csharp
private void ResetTwoWayRcsEventsEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SmsvoiceRcsAgent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SmsvoiceRcsAgent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SmsvoiceRcsAgent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SmsvoiceRcsAgent.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SmsvoiceRcsAgent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SmsvoiceRcsAgent resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SmsvoiceRcsAgent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SmsvoiceRcsAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SmsvoiceRcsAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.createdTimestamp">CreatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.poolId">PoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.rcsAgentArn">RcsAgentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.rcsAgentId">RcsAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList">SmsvoiceRcsAgentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.testingAgent">TestingAgent</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference">SmsvoiceRcsAgentTestingAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.deletionProtectionEnabledInput">DeletionProtectionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.optOutListNameInput">OptOutListNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.selfManagedOptOutsEnabledInput">SelfManagedOptOutsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelArnInput">TwoWayChannelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelRoleInput">TwoWayChannelRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayEnabledInput">TwoWayEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3BucketNameInput">TwoWayMediaS3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3KeyPrefixInput">TwoWayMediaS3KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3RoleInput">TwoWayMediaS3RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayRcsEventsEnabledInput">TwoWayRcsEventsEnabledInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.optOutListName">OptOutListName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.selfManagedOptOutsEnabled">SelfManagedOptOutsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelArn">TwoWayChannelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelRole">TwoWayChannelRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayEnabled">TwoWayEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3BucketName">TwoWayMediaS3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3KeyPrefix">TwoWayMediaS3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3Role">TwoWayMediaS3Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayRcsEventsEnabled">TwoWayRcsEventsEnabled</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.createdTimestamp"></a>

```csharp
public string CreatedTimestamp { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.poolId"></a>

```csharp
public string PoolId { get; }
```

- *Type:* string

---

##### `RcsAgentArn`<sup>Required</sup> <a name="RcsAgentArn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.rcsAgentArn"></a>

```csharp
public string RcsAgentArn { get; }
```

- *Type:* string

---

##### `RcsAgentId`<sup>Required</sup> <a name="RcsAgentId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.rcsAgentId"></a>

```csharp
public string RcsAgentId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.tags"></a>

```csharp
public SmsvoiceRcsAgentTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList">SmsvoiceRcsAgentTagsList</a>

---

##### `TestingAgent`<sup>Required</sup> <a name="TestingAgent" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.testingAgent"></a>

```csharp
public SmsvoiceRcsAgentTestingAgentOutputReference TestingAgent { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference">SmsvoiceRcsAgentTestingAgentOutputReference</a>

---

##### `DeletionProtectionEnabledInput`<sup>Optional</sup> <a name="DeletionProtectionEnabledInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.deletionProtectionEnabledInput"></a>

```csharp
public bool|IResolvable DeletionProtectionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OptOutListNameInput`<sup>Optional</sup> <a name="OptOutListNameInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.optOutListNameInput"></a>

```csharp
public string OptOutListNameInput { get; }
```

- *Type:* string

---

##### `SelfManagedOptOutsEnabledInput`<sup>Optional</sup> <a name="SelfManagedOptOutsEnabledInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.selfManagedOptOutsEnabledInput"></a>

```csharp
public bool|IResolvable SelfManagedOptOutsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.tagsInput"></a>

```csharp
public IResolvable|SmsvoiceRcsAgentTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>[]

---

##### `TwoWayChannelArnInput`<sup>Optional</sup> <a name="TwoWayChannelArnInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelArnInput"></a>

```csharp
public string TwoWayChannelArnInput { get; }
```

- *Type:* string

---

##### `TwoWayChannelRoleInput`<sup>Optional</sup> <a name="TwoWayChannelRoleInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelRoleInput"></a>

```csharp
public string TwoWayChannelRoleInput { get; }
```

- *Type:* string

---

##### `TwoWayEnabledInput`<sup>Optional</sup> <a name="TwoWayEnabledInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayEnabledInput"></a>

```csharp
public bool|IResolvable TwoWayEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TwoWayMediaS3BucketNameInput`<sup>Optional</sup> <a name="TwoWayMediaS3BucketNameInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3BucketNameInput"></a>

```csharp
public string TwoWayMediaS3BucketNameInput { get; }
```

- *Type:* string

---

##### `TwoWayMediaS3KeyPrefixInput`<sup>Optional</sup> <a name="TwoWayMediaS3KeyPrefixInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3KeyPrefixInput"></a>

```csharp
public string TwoWayMediaS3KeyPrefixInput { get; }
```

- *Type:* string

---

##### `TwoWayMediaS3RoleInput`<sup>Optional</sup> <a name="TwoWayMediaS3RoleInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3RoleInput"></a>

```csharp
public string TwoWayMediaS3RoleInput { get; }
```

- *Type:* string

---

##### `TwoWayRcsEventsEnabledInput`<sup>Optional</sup> <a name="TwoWayRcsEventsEnabledInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayRcsEventsEnabledInput"></a>

```csharp
public string[] TwoWayRcsEventsEnabledInput { get; }
```

- *Type:* string[]

---

##### `DeletionProtectionEnabled`<sup>Required</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.deletionProtectionEnabled"></a>

```csharp
public bool|IResolvable DeletionProtectionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OptOutListName`<sup>Required</sup> <a name="OptOutListName" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.optOutListName"></a>

```csharp
public string OptOutListName { get; }
```

- *Type:* string

---

##### `SelfManagedOptOutsEnabled`<sup>Required</sup> <a name="SelfManagedOptOutsEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.selfManagedOptOutsEnabled"></a>

```csharp
public bool|IResolvable SelfManagedOptOutsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TwoWayChannelArn`<sup>Required</sup> <a name="TwoWayChannelArn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelArn"></a>

```csharp
public string TwoWayChannelArn { get; }
```

- *Type:* string

---

##### `TwoWayChannelRole`<sup>Required</sup> <a name="TwoWayChannelRole" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelRole"></a>

```csharp
public string TwoWayChannelRole { get; }
```

- *Type:* string

---

##### `TwoWayEnabled`<sup>Required</sup> <a name="TwoWayEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayEnabled"></a>

```csharp
public bool|IResolvable TwoWayEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TwoWayMediaS3BucketName`<sup>Required</sup> <a name="TwoWayMediaS3BucketName" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3BucketName"></a>

```csharp
public string TwoWayMediaS3BucketName { get; }
```

- *Type:* string

---

##### `TwoWayMediaS3KeyPrefix`<sup>Required</sup> <a name="TwoWayMediaS3KeyPrefix" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3KeyPrefix"></a>

```csharp
public string TwoWayMediaS3KeyPrefix { get; }
```

- *Type:* string

---

##### `TwoWayMediaS3Role`<sup>Required</sup> <a name="TwoWayMediaS3Role" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3Role"></a>

```csharp
public string TwoWayMediaS3Role { get; }
```

- *Type:* string

---

##### `TwoWayRcsEventsEnabled`<sup>Required</sup> <a name="TwoWayRcsEventsEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayRcsEventsEnabled"></a>

```csharp
public string[] TwoWayRcsEventsEnabled { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SmsvoiceRcsAgentConfig <a name="SmsvoiceRcsAgentConfig" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceRcsAgentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable DeletionProtectionEnabled = null,
    string OptOutListName = null,
    bool|IResolvable SelfManagedOptOutsEnabled = null,
    IResolvable|SmsvoiceRcsAgentTags[] Tags = null,
    string TwoWayChannelArn = null,
    string TwoWayChannelRole = null,
    bool|IResolvable TwoWayEnabled = null,
    string TwoWayMediaS3BucketName = null,
    string TwoWayMediaS3KeyPrefix = null,
    string TwoWayMediaS3Role = null,
    string[] TwoWayRcsEventsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When set to true the RCS agent can't be deleted. By default this is false. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.optOutListName">OptOutListName</a></code> | <code>string</code> | The name of the opt-out list associated with the RCS agent. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.selfManagedOptOutsEnabled">SelfManagedOptOutsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When set to true you're responsible for responding to HELP and STOP requests, and for tracking and honoring opt-out requests. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>[]</code> | An array of key-value pairs to apply to the RCS agent. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayChannelArn">TwoWayChannelArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the two way channel where inbound messages are delivered. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayChannelRole">TwoWayChannelRole</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an IAM role for the service to assume in order to post inbound messages to the two way channel. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayEnabled">TwoWayEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When set to true two-way messaging is enabled for the RCS agent. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayMediaS3BucketName">TwoWayMediaS3BucketName</a></code> | <code>string</code> | The name of the Amazon S3 bucket where inbound RCS media objects are written. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayMediaS3KeyPrefix">TwoWayMediaS3KeyPrefix</a></code> | <code>string</code> | The key prefix used for inbound RCS media objects in the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayMediaS3Role">TwoWayMediaS3Role</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM role used to write inbound RCS media files to the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayRcsEventsEnabled">TwoWayRcsEventsEnabled</a></code> | <code>string[]</code> | The list of RCS event types enabled for two-way messaging. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DeletionProtectionEnabled`<sup>Optional</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.deletionProtectionEnabled"></a>

```csharp
public bool|IResolvable DeletionProtectionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When set to true the RCS agent can't be deleted. By default this is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#deletion_protection_enabled SmsvoiceRcsAgent#deletion_protection_enabled}

---

##### `OptOutListName`<sup>Optional</sup> <a name="OptOutListName" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.optOutListName"></a>

```csharp
public string OptOutListName { get; set; }
```

- *Type:* string

The name of the opt-out list associated with the RCS agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#opt_out_list_name SmsvoiceRcsAgent#opt_out_list_name}

---

##### `SelfManagedOptOutsEnabled`<sup>Optional</sup> <a name="SelfManagedOptOutsEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.selfManagedOptOutsEnabled"></a>

```csharp
public bool|IResolvable SelfManagedOptOutsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When set to true you're responsible for responding to HELP and STOP requests, and for tracking and honoring opt-out requests.

By default this is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#self_managed_opt_outs_enabled SmsvoiceRcsAgent#self_managed_opt_outs_enabled}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.tags"></a>

```csharp
public IResolvable|SmsvoiceRcsAgentTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>[]

An array of key-value pairs to apply to the RCS agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#tags SmsvoiceRcsAgent#tags}

---

##### `TwoWayChannelArn`<sup>Optional</sup> <a name="TwoWayChannelArn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayChannelArn"></a>

```csharp
public string TwoWayChannelArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the two way channel where inbound messages are delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_channel_arn SmsvoiceRcsAgent#two_way_channel_arn}

---

##### `TwoWayChannelRole`<sup>Optional</sup> <a name="TwoWayChannelRole" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayChannelRole"></a>

```csharp
public string TwoWayChannelRole { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of an IAM role for the service to assume in order to post inbound messages to the two way channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_channel_role SmsvoiceRcsAgent#two_way_channel_role}

---

##### `TwoWayEnabled`<sup>Optional</sup> <a name="TwoWayEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayEnabled"></a>

```csharp
public bool|IResolvable TwoWayEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When set to true two-way messaging is enabled for the RCS agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_enabled SmsvoiceRcsAgent#two_way_enabled}

---

##### `TwoWayMediaS3BucketName`<sup>Optional</sup> <a name="TwoWayMediaS3BucketName" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayMediaS3BucketName"></a>

```csharp
public string TwoWayMediaS3BucketName { get; set; }
```

- *Type:* string

The name of the Amazon S3 bucket where inbound RCS media objects are written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_media_s3_bucket_name SmsvoiceRcsAgent#two_way_media_s3_bucket_name}

---

##### `TwoWayMediaS3KeyPrefix`<sup>Optional</sup> <a name="TwoWayMediaS3KeyPrefix" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayMediaS3KeyPrefix"></a>

```csharp
public string TwoWayMediaS3KeyPrefix { get; set; }
```

- *Type:* string

The key prefix used for inbound RCS media objects in the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_media_s3_key_prefix SmsvoiceRcsAgent#two_way_media_s3_key_prefix}

---

##### `TwoWayMediaS3Role`<sup>Optional</sup> <a name="TwoWayMediaS3Role" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayMediaS3Role"></a>

```csharp
public string TwoWayMediaS3Role { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM role used to write inbound RCS media files to the Amazon S3 bucket.

The role must have s3:PutObject permission on the bucket and a trust policy allowing sms-voice.amazonaws.com to assume it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_media_s3_role SmsvoiceRcsAgent#two_way_media_s3_role}

---

##### `TwoWayRcsEventsEnabled`<sup>Optional</sup> <a name="TwoWayRcsEventsEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayRcsEventsEnabled"></a>

```csharp
public string[] TwoWayRcsEventsEnabled { get; set; }
```

- *Type:* string[]

The list of RCS event types enabled for two-way messaging.

An empty list disables all event types. The special value ALL enables all current and future event types and must be the only element if used. Requires TwoWayEnabled to be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_rcs_events_enabled SmsvoiceRcsAgent#two_way_rcs_events_enabled}

---

### SmsvoiceRcsAgentTags <a name="SmsvoiceRcsAgentTags" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceRcsAgentTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags.property.key">Key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags.property.value">Value</a></code> | <code>string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#key SmsvoiceRcsAgent#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#value SmsvoiceRcsAgent#value}

---

### SmsvoiceRcsAgentTestingAgent <a name="SmsvoiceRcsAgentTestingAgent" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceRcsAgentTestingAgent {

};
```


## Classes <a name="Classes" id="Classes"></a>

### SmsvoiceRcsAgentTagsList <a name="SmsvoiceRcsAgentTagsList" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceRcsAgentTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.get"></a>

```csharp
private SmsvoiceRcsAgentTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.property.internalValue"></a>

```csharp
public IResolvable|SmsvoiceRcsAgentTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>[]

---


### SmsvoiceRcsAgentTagsOutputReference <a name="SmsvoiceRcsAgentTagsOutputReference" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceRcsAgentTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SmsvoiceRcsAgentTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>

---


### SmsvoiceRcsAgentTestingAgentOutputReference <a name="SmsvoiceRcsAgentTestingAgentOutputReference" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceRcsAgentTestingAgentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.registrationId">RegistrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentId">TestingAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentStatus">TestingAgentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgent">SmsvoiceRcsAgentTestingAgent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegistrationId`<sup>Required</sup> <a name="RegistrationId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.registrationId"></a>

```csharp
public string RegistrationId { get; }
```

- *Type:* string

---

##### `TestingAgentId`<sup>Required</sup> <a name="TestingAgentId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentId"></a>

```csharp
public string TestingAgentId { get; }
```

- *Type:* string

---

##### `TestingAgentStatus`<sup>Required</sup> <a name="TestingAgentStatus" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentStatus"></a>

```csharp
public string TestingAgentStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.internalValue"></a>

```csharp
public SmsvoiceRcsAgentTestingAgent InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgent">SmsvoiceRcsAgentTestingAgent</a>

---



