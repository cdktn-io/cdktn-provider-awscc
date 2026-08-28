# `mgnNetworkMigrationDefinition` Submodule <a name="`mgnNetworkMigrationDefinition` Submodule" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MgnNetworkMigrationDefinition <a name="MgnNetworkMigrationDefinition" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition awscc_mgn_network_migration_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MgnNetworkMigrationDefinition(Construct Scope, string Id, MgnNetworkMigrationDefinitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig">MgnNetworkMigrationDefinitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig">MgnNetworkMigrationDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putSourceConfigurations">PutSourceConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putTargetNetwork">PutTargetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putTargetS3Configuration">PutTargetS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.resetScopeTags">ResetScopeTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.resetTargetDeployment">ResetTargetDeployment</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSourceConfigurations` <a name="PutSourceConfigurations" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putSourceConfigurations"></a>

```csharp
private void PutSourceConfigurations(IResolvable|MgnNetworkMigrationDefinitionSourceConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putSourceConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations">MgnNetworkMigrationDefinitionSourceConfigurations</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putTags"></a>

```csharp
private void PutTags(IResolvable|MgnNetworkMigrationDefinitionTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags">MgnNetworkMigrationDefinitionTags</a>[]

---

##### `PutTargetNetwork` <a name="PutTargetNetwork" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putTargetNetwork"></a>

```csharp
private void PutTargetNetwork(MgnNetworkMigrationDefinitionTargetNetwork Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putTargetNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork">MgnNetworkMigrationDefinitionTargetNetwork</a>

---

##### `PutTargetS3Configuration` <a name="PutTargetS3Configuration" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putTargetS3Configuration"></a>

```csharp
private void PutTargetS3Configuration(MgnNetworkMigrationDefinitionTargetS3Configuration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.putTargetS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration">MgnNetworkMigrationDefinitionTargetS3Configuration</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetScopeTags` <a name="ResetScopeTags" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.resetScopeTags"></a>

```csharp
private void ResetScopeTags()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTargetDeployment` <a name="ResetTargetDeployment" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.resetTargetDeployment"></a>

```csharp
private void ResetTargetDeployment()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MgnNetworkMigrationDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MgnNetworkMigrationDefinition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MgnNetworkMigrationDefinition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MgnNetworkMigrationDefinition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MgnNetworkMigrationDefinition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MgnNetworkMigrationDefinition resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MgnNetworkMigrationDefinition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MgnNetworkMigrationDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MgnNetworkMigrationDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.networkMigrationDefinitionId">NetworkMigrationDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.sourceConfigurations">SourceConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList">MgnNetworkMigrationDefinitionSourceConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList">MgnNetworkMigrationDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetNetwork">TargetNetwork</a></code> | <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference">MgnNetworkMigrationDefinitionTargetNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetS3Configuration">TargetS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference">MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.scopeTagsInput">ScopeTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.sourceConfigurationsInput">SourceConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations">MgnNetworkMigrationDefinitionSourceConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags">MgnNetworkMigrationDefinitionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetDeploymentInput">TargetDeploymentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetNetworkInput">TargetNetworkInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork">MgnNetworkMigrationDefinitionTargetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetS3ConfigurationInput">TargetS3ConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration">MgnNetworkMigrationDefinitionTargetS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.scopeTags">ScopeTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetDeployment">TargetDeployment</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NetworkMigrationDefinitionId`<sup>Required</sup> <a name="NetworkMigrationDefinitionId" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.networkMigrationDefinitionId"></a>

```csharp
public string NetworkMigrationDefinitionId { get; }
```

- *Type:* string

---

##### `SourceConfigurations`<sup>Required</sup> <a name="SourceConfigurations" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.sourceConfigurations"></a>

```csharp
public MgnNetworkMigrationDefinitionSourceConfigurationsList SourceConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList">MgnNetworkMigrationDefinitionSourceConfigurationsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.tags"></a>

```csharp
public MgnNetworkMigrationDefinitionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList">MgnNetworkMigrationDefinitionTagsList</a>

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetNetwork"></a>

```csharp
public MgnNetworkMigrationDefinitionTargetNetworkOutputReference TargetNetwork { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference">MgnNetworkMigrationDefinitionTargetNetworkOutputReference</a>

---

##### `TargetS3Configuration`<sup>Required</sup> <a name="TargetS3Configuration" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetS3Configuration"></a>

```csharp
public MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference TargetS3Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference">MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScopeTagsInput`<sup>Optional</sup> <a name="ScopeTagsInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.scopeTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ScopeTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SourceConfigurationsInput`<sup>Optional</sup> <a name="SourceConfigurationsInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.sourceConfigurationsInput"></a>

```csharp
public IResolvable|MgnNetworkMigrationDefinitionSourceConfigurations[] SourceConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations">MgnNetworkMigrationDefinitionSourceConfigurations</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.tagsInput"></a>

```csharp
public IResolvable|MgnNetworkMigrationDefinitionTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags">MgnNetworkMigrationDefinitionTags</a>[]

---

##### `TargetDeploymentInput`<sup>Optional</sup> <a name="TargetDeploymentInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetDeploymentInput"></a>

```csharp
public string TargetDeploymentInput { get; }
```

- *Type:* string

---

##### `TargetNetworkInput`<sup>Optional</sup> <a name="TargetNetworkInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetNetworkInput"></a>

```csharp
public IResolvable|MgnNetworkMigrationDefinitionTargetNetwork TargetNetworkInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork">MgnNetworkMigrationDefinitionTargetNetwork</a>

---

##### `TargetS3ConfigurationInput`<sup>Optional</sup> <a name="TargetS3ConfigurationInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetS3ConfigurationInput"></a>

```csharp
public IResolvable|MgnNetworkMigrationDefinitionTargetS3Configuration TargetS3ConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration">MgnNetworkMigrationDefinitionTargetS3Configuration</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ScopeTags`<sup>Required</sup> <a name="ScopeTags" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.scopeTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ScopeTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetDeployment`<sup>Required</sup> <a name="TargetDeployment" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.targetDeployment"></a>

```csharp
public string TargetDeployment { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MgnNetworkMigrationDefinitionConfig <a name="MgnNetworkMigrationDefinitionConfig" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MgnNetworkMigrationDefinitionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    IResolvable|MgnNetworkMigrationDefinitionSourceConfigurations[] SourceConfigurations,
    MgnNetworkMigrationDefinitionTargetNetwork TargetNetwork,
    MgnNetworkMigrationDefinitionTargetS3Configuration TargetS3Configuration,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> ScopeTags = null,
    IResolvable|MgnNetworkMigrationDefinitionTags[] Tags = null,
    string TargetDeployment = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.name">Name</a></code> | <code>string</code> | The name of the network migration definition. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.sourceConfigurations">SourceConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations">MgnNetworkMigrationDefinitionSourceConfigurations</a>[]</code> | A list of source configurations for the network migration. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.targetNetwork">TargetNetwork</a></code> | <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork">MgnNetworkMigrationDefinitionTargetNetwork</a></code> | The target network configuration including topology and CIDR ranges. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.targetS3Configuration">TargetS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration">MgnNetworkMigrationDefinitionTargetS3Configuration</a></code> | The S3 configuration for storing the target network artifacts. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.description">Description</a></code> | <code>string</code> | A description of the network migration definition. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.scopeTags">ScopeTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Scope tags for the network migration definition. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags">MgnNetworkMigrationDefinitionTags</a>[]</code> | Tags to assign to the network migration definition. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.targetDeployment">TargetDeployment</a></code> | <code>string</code> | The target deployment configuration for the migrated network. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the network migration definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#name MgnNetworkMigrationDefinition#name}

---

##### `SourceConfigurations`<sup>Required</sup> <a name="SourceConfigurations" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.sourceConfigurations"></a>

```csharp
public IResolvable|MgnNetworkMigrationDefinitionSourceConfigurations[] SourceConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations">MgnNetworkMigrationDefinitionSourceConfigurations</a>[]

A list of source configurations for the network migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#source_configurations MgnNetworkMigrationDefinition#source_configurations}

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.targetNetwork"></a>

```csharp
public MgnNetworkMigrationDefinitionTargetNetwork TargetNetwork { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork">MgnNetworkMigrationDefinitionTargetNetwork</a>

The target network configuration including topology and CIDR ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#target_network MgnNetworkMigrationDefinition#target_network}

---

##### `TargetS3Configuration`<sup>Required</sup> <a name="TargetS3Configuration" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.targetS3Configuration"></a>

```csharp
public MgnNetworkMigrationDefinitionTargetS3Configuration TargetS3Configuration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration">MgnNetworkMigrationDefinitionTargetS3Configuration</a>

The S3 configuration for storing the target network artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#target_s3_configuration MgnNetworkMigrationDefinition#target_s3_configuration}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the network migration definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#description MgnNetworkMigrationDefinition#description}

---

##### `ScopeTags`<sup>Optional</sup> <a name="ScopeTags" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.scopeTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ScopeTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Scope tags for the network migration definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#scope_tags MgnNetworkMigrationDefinition#scope_tags}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.tags"></a>

```csharp
public IResolvable|MgnNetworkMigrationDefinitionTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags">MgnNetworkMigrationDefinitionTags</a>[]

Tags to assign to the network migration definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#tags MgnNetworkMigrationDefinition#tags}

---

##### `TargetDeployment`<sup>Optional</sup> <a name="TargetDeployment" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionConfig.property.targetDeployment"></a>

```csharp
public string TargetDeployment { get; set; }
```

- *Type:* string

The target deployment configuration for the migrated network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#target_deployment MgnNetworkMigrationDefinition#target_deployment}

---

### MgnNetworkMigrationDefinitionSourceConfigurations <a name="MgnNetworkMigrationDefinitionSourceConfigurations" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MgnNetworkMigrationDefinitionSourceConfigurations {
    string SourceEnvironment,
    MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration SourceS3Configuration
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations.property.sourceEnvironment">SourceEnvironment</a></code> | <code>string</code> | The source environment type. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations.property.sourceS3Configuration">SourceS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration">MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration</a></code> | S3 configuration for source network data. |

---

##### `SourceEnvironment`<sup>Required</sup> <a name="SourceEnvironment" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations.property.sourceEnvironment"></a>

```csharp
public string SourceEnvironment { get; set; }
```

- *Type:* string

The source environment type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#source_environment MgnNetworkMigrationDefinition#source_environment}

---

##### `SourceS3Configuration`<sup>Required</sup> <a name="SourceS3Configuration" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations.property.sourceS3Configuration"></a>

```csharp
public MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration SourceS3Configuration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration">MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration</a>

S3 configuration for source network data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#source_s3_configuration MgnNetworkMigrationDefinition#source_s3_configuration}

---

### MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration <a name="MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration {
    string S3Bucket,
    string S3BucketOwner,
    string S3Key
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | The name of the S3 bucket containing source data. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration.property.s3BucketOwner">S3BucketOwner</a></code> | <code>string</code> | The AWS account ID of the S3 bucket owner. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration.property.s3Key">S3Key</a></code> | <code>string</code> | The S3 key (path) for the source data. |

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; set; }
```

- *Type:* string

The name of the S3 bucket containing source data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#s3_bucket MgnNetworkMigrationDefinition#s3_bucket}

---

##### `S3BucketOwner`<sup>Required</sup> <a name="S3BucketOwner" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration.property.s3BucketOwner"></a>

```csharp
public string S3BucketOwner { get; set; }
```

- *Type:* string

The AWS account ID of the S3 bucket owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#s3_bucket_owner MgnNetworkMigrationDefinition#s3_bucket_owner}

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration.property.s3Key"></a>

```csharp
public string S3Key { get; set; }
```

- *Type:* string

The S3 key (path) for the source data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#s3_key MgnNetworkMigrationDefinition#s3_key}

---

### MgnNetworkMigrationDefinitionTags <a name="MgnNetworkMigrationDefinitionTags" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MgnNetworkMigrationDefinitionTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#key MgnNetworkMigrationDefinition#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#value MgnNetworkMigrationDefinition#value}

---

### MgnNetworkMigrationDefinitionTargetNetwork <a name="MgnNetworkMigrationDefinitionTargetNetwork" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MgnNetworkMigrationDefinitionTargetNetwork {
    string Topology,
    string InboundCidr = null,
    string InspectionCidr = null,
    string OutboundCidr = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork.property.topology">Topology</a></code> | <code>string</code> | The network topology type for the target environment. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork.property.inboundCidr">InboundCidr</a></code> | <code>string</code> | The CIDR block for inbound traffic in the target network. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork.property.inspectionCidr">InspectionCidr</a></code> | <code>string</code> | The CIDR block for inspection traffic in the target network. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork.property.outboundCidr">OutboundCidr</a></code> | <code>string</code> | The CIDR block for outbound traffic in the target network. |

---

##### `Topology`<sup>Required</sup> <a name="Topology" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork.property.topology"></a>

```csharp
public string Topology { get; set; }
```

- *Type:* string

The network topology type for the target environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#topology MgnNetworkMigrationDefinition#topology}

---

##### `InboundCidr`<sup>Optional</sup> <a name="InboundCidr" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork.property.inboundCidr"></a>

```csharp
public string InboundCidr { get; set; }
```

- *Type:* string

The CIDR block for inbound traffic in the target network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#inbound_cidr MgnNetworkMigrationDefinition#inbound_cidr}

---

##### `InspectionCidr`<sup>Optional</sup> <a name="InspectionCidr" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork.property.inspectionCidr"></a>

```csharp
public string InspectionCidr { get; set; }
```

- *Type:* string

The CIDR block for inspection traffic in the target network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#inspection_cidr MgnNetworkMigrationDefinition#inspection_cidr}

---

##### `OutboundCidr`<sup>Optional</sup> <a name="OutboundCidr" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork.property.outboundCidr"></a>

```csharp
public string OutboundCidr { get; set; }
```

- *Type:* string

The CIDR block for outbound traffic in the target network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#outbound_cidr MgnNetworkMigrationDefinition#outbound_cidr}

---

### MgnNetworkMigrationDefinitionTargetS3Configuration <a name="MgnNetworkMigrationDefinitionTargetS3Configuration" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MgnNetworkMigrationDefinitionTargetS3Configuration {
    string S3Bucket,
    string S3BucketOwner
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | The name of the S3 bucket for target artifacts. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration.property.s3BucketOwner">S3BucketOwner</a></code> | <code>string</code> | The AWS account ID of the S3 bucket owner. |

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; set; }
```

- *Type:* string

The name of the S3 bucket for target artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#s3_bucket MgnNetworkMigrationDefinition#s3_bucket}

---

##### `S3BucketOwner`<sup>Required</sup> <a name="S3BucketOwner" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration.property.s3BucketOwner"></a>

```csharp
public string S3BucketOwner { get; set; }
```

- *Type:* string

The AWS account ID of the S3 bucket owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#s3_bucket_owner MgnNetworkMigrationDefinition#s3_bucket_owner}

---

## Classes <a name="Classes" id="Classes"></a>

### MgnNetworkMigrationDefinitionSourceConfigurationsList <a name="MgnNetworkMigrationDefinitionSourceConfigurationsList" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MgnNetworkMigrationDefinitionSourceConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.get"></a>

```csharp
private MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations">MgnNetworkMigrationDefinitionSourceConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|MgnNetworkMigrationDefinitionSourceConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations">MgnNetworkMigrationDefinitionSourceConfigurations</a>[]

---


### MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference <a name="MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.putSourceS3Configuration">PutSourceS3Configuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourceS3Configuration` <a name="PutSourceS3Configuration" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.putSourceS3Configuration"></a>

```csharp
private void PutSourceS3Configuration(MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.putSourceS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration">MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceS3Configuration">SourceS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference">MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceEnvironmentInput">SourceEnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceS3ConfigurationInput">SourceS3ConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration">MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceEnvironment">SourceEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations">MgnNetworkMigrationDefinitionSourceConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceS3Configuration`<sup>Required</sup> <a name="SourceS3Configuration" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceS3Configuration"></a>

```csharp
public MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference SourceS3Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference">MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference</a>

---

##### `SourceEnvironmentInput`<sup>Optional</sup> <a name="SourceEnvironmentInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceEnvironmentInput"></a>

```csharp
public string SourceEnvironmentInput { get; }
```

- *Type:* string

---

##### `SourceS3ConfigurationInput`<sup>Optional</sup> <a name="SourceS3ConfigurationInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceS3ConfigurationInput"></a>

```csharp
public IResolvable|MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration SourceS3ConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration">MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration</a>

---

##### `SourceEnvironment`<sup>Required</sup> <a name="SourceEnvironment" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceEnvironment"></a>

```csharp
public string SourceEnvironment { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MgnNetworkMigrationDefinitionSourceConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurations">MgnNetworkMigrationDefinitionSourceConfigurations</a>

---


### MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference <a name="MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3BucketOwnerInput">S3BucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3KeyInput">S3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3BucketOwner">S3BucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3Key">S3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration">MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3BucketInput"></a>

```csharp
public string S3BucketInput { get; }
```

- *Type:* string

---

##### `S3BucketOwnerInput`<sup>Optional</sup> <a name="S3BucketOwnerInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3BucketOwnerInput"></a>

```csharp
public string S3BucketOwnerInput { get; }
```

- *Type:* string

---

##### `S3KeyInput`<sup>Optional</sup> <a name="S3KeyInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3KeyInput"></a>

```csharp
public string S3KeyInput { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `S3BucketOwner`<sup>Required</sup> <a name="S3BucketOwner" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3BucketOwner"></a>

```csharp
public string S3BucketOwner { get; }
```

- *Type:* string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3Key"></a>

```csharp
public string S3Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration">MgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration</a>

---


### MgnNetworkMigrationDefinitionTagsList <a name="MgnNetworkMigrationDefinitionTagsList" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MgnNetworkMigrationDefinitionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.get"></a>

```csharp
private MgnNetworkMigrationDefinitionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags">MgnNetworkMigrationDefinitionTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsList.property.internalValue"></a>

```csharp
public IResolvable|MgnNetworkMigrationDefinitionTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags">MgnNetworkMigrationDefinitionTags</a>[]

---


### MgnNetworkMigrationDefinitionTagsOutputReference <a name="MgnNetworkMigrationDefinitionTagsOutputReference" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MgnNetworkMigrationDefinitionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags">MgnNetworkMigrationDefinitionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MgnNetworkMigrationDefinitionTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTags">MgnNetworkMigrationDefinitionTags</a>

---


### MgnNetworkMigrationDefinitionTargetNetworkOutputReference <a name="MgnNetworkMigrationDefinitionTargetNetworkOutputReference" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MgnNetworkMigrationDefinitionTargetNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.resetInboundCidr">ResetInboundCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.resetInspectionCidr">ResetInspectionCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.resetOutboundCidr">ResetOutboundCidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInboundCidr` <a name="ResetInboundCidr" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.resetInboundCidr"></a>

```csharp
private void ResetInboundCidr()
```

##### `ResetInspectionCidr` <a name="ResetInspectionCidr" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.resetInspectionCidr"></a>

```csharp
private void ResetInspectionCidr()
```

##### `ResetOutboundCidr` <a name="ResetOutboundCidr" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.resetOutboundCidr"></a>

```csharp
private void ResetOutboundCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inboundCidrInput">InboundCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inspectionCidrInput">InspectionCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.outboundCidrInput">OutboundCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.topologyInput">TopologyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inboundCidr">InboundCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inspectionCidr">InspectionCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.outboundCidr">OutboundCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.topology">Topology</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork">MgnNetworkMigrationDefinitionTargetNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InboundCidrInput`<sup>Optional</sup> <a name="InboundCidrInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inboundCidrInput"></a>

```csharp
public string InboundCidrInput { get; }
```

- *Type:* string

---

##### `InspectionCidrInput`<sup>Optional</sup> <a name="InspectionCidrInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inspectionCidrInput"></a>

```csharp
public string InspectionCidrInput { get; }
```

- *Type:* string

---

##### `OutboundCidrInput`<sup>Optional</sup> <a name="OutboundCidrInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.outboundCidrInput"></a>

```csharp
public string OutboundCidrInput { get; }
```

- *Type:* string

---

##### `TopologyInput`<sup>Optional</sup> <a name="TopologyInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.topologyInput"></a>

```csharp
public string TopologyInput { get; }
```

- *Type:* string

---

##### `InboundCidr`<sup>Required</sup> <a name="InboundCidr" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inboundCidr"></a>

```csharp
public string InboundCidr { get; }
```

- *Type:* string

---

##### `InspectionCidr`<sup>Required</sup> <a name="InspectionCidr" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inspectionCidr"></a>

```csharp
public string InspectionCidr { get; }
```

- *Type:* string

---

##### `OutboundCidr`<sup>Required</sup> <a name="OutboundCidr" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.outboundCidr"></a>

```csharp
public string OutboundCidr { get; }
```

- *Type:* string

---

##### `Topology`<sup>Required</sup> <a name="Topology" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.topology"></a>

```csharp
public string Topology { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MgnNetworkMigrationDefinitionTargetNetwork InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetNetwork">MgnNetworkMigrationDefinitionTargetNetwork</a>

---


### MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference <a name="MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3BucketOwnerInput">S3BucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3BucketOwner">S3BucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration">MgnNetworkMigrationDefinitionTargetS3Configuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3BucketInput"></a>

```csharp
public string S3BucketInput { get; }
```

- *Type:* string

---

##### `S3BucketOwnerInput`<sup>Optional</sup> <a name="S3BucketOwnerInput" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3BucketOwnerInput"></a>

```csharp
public string S3BucketOwnerInput { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `S3BucketOwner`<sup>Required</sup> <a name="S3BucketOwner" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3BucketOwner"></a>

```csharp
public string S3BucketOwner { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MgnNetworkMigrationDefinitionTargetS3Configuration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mgnNetworkMigrationDefinition.MgnNetworkMigrationDefinitionTargetS3Configuration">MgnNetworkMigrationDefinitionTargetS3Configuration</a>

---



