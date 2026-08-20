# `iotsitewisePortal` Submodule <a name="`iotsitewisePortal` Submodule" id="@cdktn/provider-awscc.iotsitewisePortal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotsitewisePortal <a name="IotsitewisePortal" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal awscc_iotsitewise_portal}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewisePortal(Construct Scope, string Id, IotsitewisePortalConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig">IotsitewisePortalConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig">IotsitewisePortalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putAlarms">PutAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putPortalTypeConfiguration">PutPortalTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetAlarms">ResetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetNotificationSenderEmail">ResetNotificationSenderEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalAuthMode">ResetPortalAuthMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalDescription">ResetPortalDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalType">ResetPortalType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalTypeConfiguration">ResetPortalTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAlarms` <a name="PutAlarms" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putAlarms"></a>

```csharp
private void PutAlarms(IotsitewisePortalAlarms Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putAlarms.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a>

---

##### `PutPortalTypeConfiguration` <a name="PutPortalTypeConfiguration" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putPortalTypeConfiguration"></a>

```csharp
private void PutPortalTypeConfiguration(IResolvable|System.Collections.Generic.IDictionary<string, IotsitewisePortalPortalTypeConfiguration> Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putPortalTypeConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putTags"></a>

```csharp
private void PutTags(IResolvable|IotsitewisePortalTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>[]

---

##### `ResetAlarms` <a name="ResetAlarms" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetAlarms"></a>

```csharp
private void ResetAlarms()
```

##### `ResetNotificationSenderEmail` <a name="ResetNotificationSenderEmail" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetNotificationSenderEmail"></a>

```csharp
private void ResetNotificationSenderEmail()
```

##### `ResetPortalAuthMode` <a name="ResetPortalAuthMode" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalAuthMode"></a>

```csharp
private void ResetPortalAuthMode()
```

##### `ResetPortalDescription` <a name="ResetPortalDescription" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalDescription"></a>

```csharp
private void ResetPortalDescription()
```

##### `ResetPortalType` <a name="ResetPortalType" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalType"></a>

```csharp
private void ResetPortalType()
```

##### `ResetPortalTypeConfiguration` <a name="ResetPortalTypeConfiguration" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalTypeConfiguration"></a>

```csharp
private void ResetPortalTypeConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotsitewisePortal resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotsitewisePortal.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotsitewisePortal.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotsitewisePortal.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotsitewisePortal.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IotsitewisePortal resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotsitewisePortal to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotsitewisePortal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IotsitewisePortal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.alarms">Alarms</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference">IotsitewisePortalAlarmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalArn">PortalArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalClientId">PortalClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalId">PortalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalStartUrl">PortalStartUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalTypeConfiguration">PortalTypeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap">IotsitewisePortalPortalTypeConfigurationMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList">IotsitewisePortalTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.alarmsInput">AlarmsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.notificationSenderEmailInput">NotificationSenderEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalAuthModeInput">PortalAuthModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalContactEmailInput">PortalContactEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalDescriptionInput">PortalDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalNameInput">PortalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalTypeConfigurationInput">PortalTypeConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalTypeInput">PortalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.notificationSenderEmail">NotificationSenderEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalAuthMode">PortalAuthMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalContactEmail">PortalContactEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalDescription">PortalDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalName">PortalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalType">PortalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.alarms"></a>

```csharp
public IotsitewisePortalAlarmsOutputReference Alarms { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference">IotsitewisePortalAlarmsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PortalArn`<sup>Required</sup> <a name="PortalArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalArn"></a>

```csharp
public string PortalArn { get; }
```

- *Type:* string

---

##### `PortalClientId`<sup>Required</sup> <a name="PortalClientId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalClientId"></a>

```csharp
public string PortalClientId { get; }
```

- *Type:* string

---

##### `PortalId`<sup>Required</sup> <a name="PortalId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalId"></a>

```csharp
public string PortalId { get; }
```

- *Type:* string

---

##### `PortalStartUrl`<sup>Required</sup> <a name="PortalStartUrl" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalStartUrl"></a>

```csharp
public string PortalStartUrl { get; }
```

- *Type:* string

---

##### `PortalTypeConfiguration`<sup>Required</sup> <a name="PortalTypeConfiguration" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalTypeConfiguration"></a>

```csharp
public IotsitewisePortalPortalTypeConfigurationMap PortalTypeConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap">IotsitewisePortalPortalTypeConfigurationMap</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.tags"></a>

```csharp
public IotsitewisePortalTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList">IotsitewisePortalTagsList</a>

---

##### `AlarmsInput`<sup>Optional</sup> <a name="AlarmsInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.alarmsInput"></a>

```csharp
public IResolvable|IotsitewisePortalAlarms AlarmsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a>

---

##### `NotificationSenderEmailInput`<sup>Optional</sup> <a name="NotificationSenderEmailInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.notificationSenderEmailInput"></a>

```csharp
public string NotificationSenderEmailInput { get; }
```

- *Type:* string

---

##### `PortalAuthModeInput`<sup>Optional</sup> <a name="PortalAuthModeInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalAuthModeInput"></a>

```csharp
public string PortalAuthModeInput { get; }
```

- *Type:* string

---

##### `PortalContactEmailInput`<sup>Optional</sup> <a name="PortalContactEmailInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalContactEmailInput"></a>

```csharp
public string PortalContactEmailInput { get; }
```

- *Type:* string

---

##### `PortalDescriptionInput`<sup>Optional</sup> <a name="PortalDescriptionInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalDescriptionInput"></a>

```csharp
public string PortalDescriptionInput { get; }
```

- *Type:* string

---

##### `PortalNameInput`<sup>Optional</sup> <a name="PortalNameInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalNameInput"></a>

```csharp
public string PortalNameInput { get; }
```

- *Type:* string

---

##### `PortalTypeConfigurationInput`<sup>Optional</sup> <a name="PortalTypeConfigurationInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalTypeConfigurationInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, IotsitewisePortalPortalTypeConfiguration> PortalTypeConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>>

---

##### `PortalTypeInput`<sup>Optional</sup> <a name="PortalTypeInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalTypeInput"></a>

```csharp
public string PortalTypeInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.tagsInput"></a>

```csharp
public IResolvable|IotsitewisePortalTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>[]

---

##### `NotificationSenderEmail`<sup>Required</sup> <a name="NotificationSenderEmail" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.notificationSenderEmail"></a>

```csharp
public string NotificationSenderEmail { get; }
```

- *Type:* string

---

##### `PortalAuthMode`<sup>Required</sup> <a name="PortalAuthMode" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalAuthMode"></a>

```csharp
public string PortalAuthMode { get; }
```

- *Type:* string

---

##### `PortalContactEmail`<sup>Required</sup> <a name="PortalContactEmail" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalContactEmail"></a>

```csharp
public string PortalContactEmail { get; }
```

- *Type:* string

---

##### `PortalDescription`<sup>Required</sup> <a name="PortalDescription" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalDescription"></a>

```csharp
public string PortalDescription { get; }
```

- *Type:* string

---

##### `PortalName`<sup>Required</sup> <a name="PortalName" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalName"></a>

```csharp
public string PortalName { get; }
```

- *Type:* string

---

##### `PortalType`<sup>Required</sup> <a name="PortalType" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalType"></a>

```csharp
public string PortalType { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotsitewisePortalAlarms <a name="IotsitewisePortalAlarms" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewisePortalAlarms {
    string AlarmRoleArn = null,
    string NotificationLambdaArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms.property.alarmRoleArn">AlarmRoleArn</a></code> | <code>string</code> | The ARN of the IAM role that allows the alarm to perform actions and access AWS resources and services, such as AWS IoT Events. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms.property.notificationLambdaArn">NotificationLambdaArn</a></code> | <code>string</code> | The ARN of the AWS Lambda function that manages alarm notifications. |

---

##### `AlarmRoleArn`<sup>Optional</sup> <a name="AlarmRoleArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms.property.alarmRoleArn"></a>

```csharp
public string AlarmRoleArn { get; set; }
```

- *Type:* string

The ARN of the IAM role that allows the alarm to perform actions and access AWS resources and services, such as AWS IoT Events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#alarm_role_arn IotsitewisePortal#alarm_role_arn}

---

##### `NotificationLambdaArn`<sup>Optional</sup> <a name="NotificationLambdaArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms.property.notificationLambdaArn"></a>

```csharp
public string NotificationLambdaArn { get; set; }
```

- *Type:* string

The ARN of the AWS Lambda function that manages alarm notifications.

For more information, see Managing alarm notifications in the AWS IoT Events Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#notification_lambda_arn IotsitewisePortal#notification_lambda_arn}

---

### IotsitewisePortalConfig <a name="IotsitewisePortalConfig" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewisePortalConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string PortalContactEmail,
    string PortalName,
    string RoleArn,
    IotsitewisePortalAlarms Alarms = null,
    string NotificationSenderEmail = null,
    string PortalAuthMode = null,
    string PortalDescription = null,
    string PortalType = null,
    IResolvable|System.Collections.Generic.IDictionary<string, IotsitewisePortalPortalTypeConfiguration> PortalTypeConfiguration = null,
    IResolvable|IotsitewisePortalTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalContactEmail">PortalContactEmail</a></code> | <code>string</code> | The AWS administrator's contact email address. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalName">PortalName</a></code> | <code>string</code> | A friendly name for the portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | The ARN of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.alarms">Alarms</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a></code> | Contains the configuration information of an alarm created in an AWS IoT SiteWise Monitor portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.notificationSenderEmail">NotificationSenderEmail</a></code> | <code>string</code> | The email address that sends alarm notifications. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalAuthMode">PortalAuthMode</a></code> | <code>string</code> | The service to use to authenticate users to the portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalDescription">PortalDescription</a></code> | <code>string</code> | A description for the portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalType">PortalType</a></code> | <code>string</code> | The type of portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalTypeConfiguration">PortalTypeConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>></code> | Map to associate detail of configuration related with a PortalType. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>[]</code> | A list of key-value pairs that contain metadata for the portal. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PortalContactEmail`<sup>Required</sup> <a name="PortalContactEmail" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalContactEmail"></a>

```csharp
public string PortalContactEmail { get; set; }
```

- *Type:* string

The AWS administrator's contact email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_contact_email IotsitewisePortal#portal_contact_email}

---

##### `PortalName`<sup>Required</sup> <a name="PortalName" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalName"></a>

```csharp
public string PortalName { get; set; }
```

- *Type:* string

A friendly name for the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_name IotsitewisePortal#portal_name}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The ARN of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#role_arn IotsitewisePortal#role_arn}

---

##### `Alarms`<sup>Optional</sup> <a name="Alarms" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.alarms"></a>

```csharp
public IotsitewisePortalAlarms Alarms { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a>

Contains the configuration information of an alarm created in an AWS IoT SiteWise Monitor portal.

You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#alarms IotsitewisePortal#alarms}

---

##### `NotificationSenderEmail`<sup>Optional</sup> <a name="NotificationSenderEmail" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.notificationSenderEmail"></a>

```csharp
public string NotificationSenderEmail { get; set; }
```

- *Type:* string

The email address that sends alarm notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#notification_sender_email IotsitewisePortal#notification_sender_email}

---

##### `PortalAuthMode`<sup>Optional</sup> <a name="PortalAuthMode" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalAuthMode"></a>

```csharp
public string PortalAuthMode { get; set; }
```

- *Type:* string

The service to use to authenticate users to the portal.

Choose from SSO or IAM. You can't change this value after you create a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_auth_mode IotsitewisePortal#portal_auth_mode}

---

##### `PortalDescription`<sup>Optional</sup> <a name="PortalDescription" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalDescription"></a>

```csharp
public string PortalDescription { get; set; }
```

- *Type:* string

A description for the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_description IotsitewisePortal#portal_description}

---

##### `PortalType`<sup>Optional</sup> <a name="PortalType" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalType"></a>

```csharp
public string PortalType { get; set; }
```

- *Type:* string

The type of portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_type IotsitewisePortal#portal_type}

---

##### `PortalTypeConfiguration`<sup>Optional</sup> <a name="PortalTypeConfiguration" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalTypeConfiguration"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, IotsitewisePortalPortalTypeConfiguration> PortalTypeConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>>

Map to associate detail of configuration related with a PortalType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_type_configuration IotsitewisePortal#portal_type_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.tags"></a>

```csharp
public IResolvable|IotsitewisePortalTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>[]

A list of key-value pairs that contain metadata for the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#tags IotsitewisePortal#tags}

---

### IotsitewisePortalPortalTypeConfiguration <a name="IotsitewisePortalPortalTypeConfiguration" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewisePortalPortalTypeConfiguration {
    string[] PortalTools = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration.property.portalTools">PortalTools</a></code> | <code>string[]</code> | List of enabled Tools for a certain portal. |

---

##### `PortalTools`<sup>Optional</sup> <a name="PortalTools" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration.property.portalTools"></a>

```csharp
public string[] PortalTools { get; set; }
```

- *Type:* string[]

List of enabled Tools for a certain portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_tools IotsitewisePortal#portal_tools}

---

### IotsitewisePortalTags <a name="IotsitewisePortalTags" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewisePortalTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#key IotsitewisePortal#key}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#value IotsitewisePortal#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#key IotsitewisePortal#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#value IotsitewisePortal#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotsitewisePortalAlarmsOutputReference <a name="IotsitewisePortalAlarmsOutputReference" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewisePortalAlarmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resetAlarmRoleArn">ResetAlarmRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resetNotificationLambdaArn">ResetNotificationLambdaArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarmRoleArn` <a name="ResetAlarmRoleArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resetAlarmRoleArn"></a>

```csharp
private void ResetAlarmRoleArn()
```

##### `ResetNotificationLambdaArn` <a name="ResetNotificationLambdaArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resetNotificationLambdaArn"></a>

```csharp
private void ResetNotificationLambdaArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.alarmRoleArnInput">AlarmRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.notificationLambdaArnInput">NotificationLambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.alarmRoleArn">AlarmRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.notificationLambdaArn">NotificationLambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlarmRoleArnInput`<sup>Optional</sup> <a name="AlarmRoleArnInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.alarmRoleArnInput"></a>

```csharp
public string AlarmRoleArnInput { get; }
```

- *Type:* string

---

##### `NotificationLambdaArnInput`<sup>Optional</sup> <a name="NotificationLambdaArnInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.notificationLambdaArnInput"></a>

```csharp
public string NotificationLambdaArnInput { get; }
```

- *Type:* string

---

##### `AlarmRoleArn`<sup>Required</sup> <a name="AlarmRoleArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.alarmRoleArn"></a>

```csharp
public string AlarmRoleArn { get; }
```

- *Type:* string

---

##### `NotificationLambdaArn`<sup>Required</sup> <a name="NotificationLambdaArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.notificationLambdaArn"></a>

```csharp
public string NotificationLambdaArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotsitewisePortalAlarms InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a>

---


### IotsitewisePortalPortalTypeConfigurationMap <a name="IotsitewisePortalPortalTypeConfigurationMap" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewisePortalPortalTypeConfigurationMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.get"></a>

```csharp
private IotsitewisePortalPortalTypeConfigurationOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.property.internalValue"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, IotsitewisePortalPortalTypeConfiguration> InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>>

---


### IotsitewisePortalPortalTypeConfigurationOutputReference <a name="IotsitewisePortalPortalTypeConfigurationOutputReference" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewisePortalPortalTypeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.resetPortalTools">ResetPortalTools</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPortalTools` <a name="ResetPortalTools" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.resetPortalTools"></a>

```csharp
private void ResetPortalTools()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.portalToolsInput">PortalToolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.portalTools">PortalTools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortalToolsInput`<sup>Optional</sup> <a name="PortalToolsInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.portalToolsInput"></a>

```csharp
public string[] PortalToolsInput { get; }
```

- *Type:* string[]

---

##### `PortalTools`<sup>Required</sup> <a name="PortalTools" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.portalTools"></a>

```csharp
public string[] PortalTools { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotsitewisePortalPortalTypeConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>

---


### IotsitewisePortalTagsList <a name="IotsitewisePortalTagsList" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewisePortalTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.get"></a>

```csharp
private IotsitewisePortalTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.property.internalValue"></a>

```csharp
public IResolvable|IotsitewisePortalTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>[]

---


### IotsitewisePortalTagsOutputReference <a name="IotsitewisePortalTagsOutputReference" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewisePortalTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotsitewisePortalTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>

---



