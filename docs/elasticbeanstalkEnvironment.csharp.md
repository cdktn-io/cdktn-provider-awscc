# `elasticbeanstalkEnvironment` Submodule <a name="`elasticbeanstalkEnvironment` Submodule" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticbeanstalkEnvironment <a name="ElasticbeanstalkEnvironment" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment awscc_elasticbeanstalk_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticbeanstalkEnvironment(Construct Scope, string Id, ElasticbeanstalkEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig">ElasticbeanstalkEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig">ElasticbeanstalkEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putOptionSettings">PutOptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putTier">PutTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetCnamePrefix">ResetCnamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetEnvironmentName">ResetEnvironmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetOperationsRole">ResetOperationsRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetOptionSettings">ResetOptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetPlatformArn">ResetPlatformArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetSolutionStackName">ResetSolutionStackName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetTemplateName">ResetTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetTier">ResetTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetVersionLabel">ResetVersionLabel</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOptionSettings` <a name="PutOptionSettings" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putOptionSettings"></a>

```csharp
private void PutOptionSettings(IResolvable|ElasticbeanstalkEnvironmentOptionSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putOptionSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putTags"></a>

```csharp
private void PutTags(IResolvable|ElasticbeanstalkEnvironmentTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>[]

---

##### `PutTier` <a name="PutTier" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putTier"></a>

```csharp
private void PutTier(ElasticbeanstalkEnvironmentTier Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putTier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a>

---

##### `ResetCnamePrefix` <a name="ResetCnamePrefix" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetCnamePrefix"></a>

```csharp
private void ResetCnamePrefix()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnvironmentName` <a name="ResetEnvironmentName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetEnvironmentName"></a>

```csharp
private void ResetEnvironmentName()
```

##### `ResetOperationsRole` <a name="ResetOperationsRole" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetOperationsRole"></a>

```csharp
private void ResetOperationsRole()
```

##### `ResetOptionSettings` <a name="ResetOptionSettings" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetOptionSettings"></a>

```csharp
private void ResetOptionSettings()
```

##### `ResetPlatformArn` <a name="ResetPlatformArn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetPlatformArn"></a>

```csharp
private void ResetPlatformArn()
```

##### `ResetSolutionStackName` <a name="ResetSolutionStackName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetSolutionStackName"></a>

```csharp
private void ResetSolutionStackName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTemplateName` <a name="ResetTemplateName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetTemplateName"></a>

```csharp
private void ResetTemplateName()
```

##### `ResetTier` <a name="ResetTier" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetTier"></a>

```csharp
private void ResetTier()
```

##### `ResetVersionLabel` <a name="ResetVersionLabel" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetVersionLabel"></a>

```csharp
private void ResetVersionLabel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ElasticbeanstalkEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticbeanstalkEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticbeanstalkEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticbeanstalkEnvironment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticbeanstalkEnvironment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ElasticbeanstalkEnvironment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElasticbeanstalkEnvironment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElasticbeanstalkEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ElasticbeanstalkEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.endpointUrl">EndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.optionSettings">OptionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList">ElasticbeanstalkEnvironmentOptionSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList">ElasticbeanstalkEnvironmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tier">Tier</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference">ElasticbeanstalkEnvironmentTierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.applicationNameInput">ApplicationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.cnamePrefixInput">CnamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.environmentNameInput">EnvironmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.operationsRoleInput">OperationsRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.optionSettingsInput">OptionSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.platformArnInput">PlatformArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.solutionStackNameInput">SolutionStackNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.templateNameInput">TemplateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tierInput">TierInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.versionLabelInput">VersionLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.applicationName">ApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.cnamePrefix">CnamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.environmentName">EnvironmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.operationsRole">OperationsRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.platformArn">PlatformArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.solutionStackName">SolutionStackName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.templateName">TemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.versionLabel">VersionLabel</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EndpointUrl`<sup>Required</sup> <a name="EndpointUrl" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.endpointUrl"></a>

```csharp
public string EndpointUrl { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OptionSettings`<sup>Required</sup> <a name="OptionSettings" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.optionSettings"></a>

```csharp
public ElasticbeanstalkEnvironmentOptionSettingsList OptionSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList">ElasticbeanstalkEnvironmentOptionSettingsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tags"></a>

```csharp
public ElasticbeanstalkEnvironmentTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList">ElasticbeanstalkEnvironmentTagsList</a>

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tier"></a>

```csharp
public ElasticbeanstalkEnvironmentTierOutputReference Tier { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference">ElasticbeanstalkEnvironmentTierOutputReference</a>

---

##### `ApplicationNameInput`<sup>Optional</sup> <a name="ApplicationNameInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.applicationNameInput"></a>

```csharp
public string ApplicationNameInput { get; }
```

- *Type:* string

---

##### `CnamePrefixInput`<sup>Optional</sup> <a name="CnamePrefixInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.cnamePrefixInput"></a>

```csharp
public string CnamePrefixInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnvironmentNameInput`<sup>Optional</sup> <a name="EnvironmentNameInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.environmentNameInput"></a>

```csharp
public string EnvironmentNameInput { get; }
```

- *Type:* string

---

##### `OperationsRoleInput`<sup>Optional</sup> <a name="OperationsRoleInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.operationsRoleInput"></a>

```csharp
public string OperationsRoleInput { get; }
```

- *Type:* string

---

##### `OptionSettingsInput`<sup>Optional</sup> <a name="OptionSettingsInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.optionSettingsInput"></a>

```csharp
public IResolvable|ElasticbeanstalkEnvironmentOptionSettings[] OptionSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>[]

---

##### `PlatformArnInput`<sup>Optional</sup> <a name="PlatformArnInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.platformArnInput"></a>

```csharp
public string PlatformArnInput { get; }
```

- *Type:* string

---

##### `SolutionStackNameInput`<sup>Optional</sup> <a name="SolutionStackNameInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.solutionStackNameInput"></a>

```csharp
public string SolutionStackNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tagsInput"></a>

```csharp
public IResolvable|ElasticbeanstalkEnvironmentTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>[]

---

##### `TemplateNameInput`<sup>Optional</sup> <a name="TemplateNameInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.templateNameInput"></a>

```csharp
public string TemplateNameInput { get; }
```

- *Type:* string

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tierInput"></a>

```csharp
public IResolvable|ElasticbeanstalkEnvironmentTier TierInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a>

---

##### `VersionLabelInput`<sup>Optional</sup> <a name="VersionLabelInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.versionLabelInput"></a>

```csharp
public string VersionLabelInput { get; }
```

- *Type:* string

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.applicationName"></a>

```csharp
public string ApplicationName { get; }
```

- *Type:* string

---

##### `CnamePrefix`<sup>Required</sup> <a name="CnamePrefix" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.cnamePrefix"></a>

```csharp
public string CnamePrefix { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnvironmentName`<sup>Required</sup> <a name="EnvironmentName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.environmentName"></a>

```csharp
public string EnvironmentName { get; }
```

- *Type:* string

---

##### `OperationsRole`<sup>Required</sup> <a name="OperationsRole" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.operationsRole"></a>

```csharp
public string OperationsRole { get; }
```

- *Type:* string

---

##### `PlatformArn`<sup>Required</sup> <a name="PlatformArn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.platformArn"></a>

```csharp
public string PlatformArn { get; }
```

- *Type:* string

---

##### `SolutionStackName`<sup>Required</sup> <a name="SolutionStackName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.solutionStackName"></a>

```csharp
public string SolutionStackName { get; }
```

- *Type:* string

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.templateName"></a>

```csharp
public string TemplateName { get; }
```

- *Type:* string

---

##### `VersionLabel`<sup>Required</sup> <a name="VersionLabel" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.versionLabel"></a>

```csharp
public string VersionLabel { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticbeanstalkEnvironmentConfig <a name="ElasticbeanstalkEnvironmentConfig" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticbeanstalkEnvironmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApplicationName,
    string CnamePrefix = null,
    string Description = null,
    string EnvironmentName = null,
    string OperationsRole = null,
    IResolvable|ElasticbeanstalkEnvironmentOptionSettings[] OptionSettings = null,
    string PlatformArn = null,
    string SolutionStackName = null,
    IResolvable|ElasticbeanstalkEnvironmentTags[] Tags = null,
    string TemplateName = null,
    ElasticbeanstalkEnvironmentTier Tier = null,
    string VersionLabel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.applicationName">ApplicationName</a></code> | <code>string</code> | The name of the application that is associated with this environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.cnamePrefix">CnamePrefix</a></code> | <code>string</code> | If specified, the environment attempts to use this value as the prefix for the CNAME in your Elastic Beanstalk environment URL. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.description">Description</a></code> | <code>string</code> | Your description for this environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.environmentName">EnvironmentName</a></code> | <code>string</code> | A unique name for the environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.operationsRole">OperationsRole</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.optionSettings">OptionSettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>[]</code> | Key-value pairs defining configuration options for this environment, such as the instance type. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.platformArn">PlatformArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the custom platform to use with the environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.solutionStackName">SolutionStackName</a></code> | <code>string</code> | The name of an Elastic Beanstalk solution stack (platform version) to use with the environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>[]</code> | Specifies the tags applied to resources in the environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.templateName">TemplateName</a></code> | <code>string</code> | The name of the Elastic Beanstalk configuration template to use with the environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.tier">Tier</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a></code> | Specifies the tier to use in creating this environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.versionLabel">VersionLabel</a></code> | <code>string</code> | The name of the application version to deploy. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.applicationName"></a>

```csharp
public string ApplicationName { get; set; }
```

- *Type:* string

The name of the application that is associated with this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#application_name ElasticbeanstalkEnvironment#application_name}

---

##### `CnamePrefix`<sup>Optional</sup> <a name="CnamePrefix" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.cnamePrefix"></a>

```csharp
public string CnamePrefix { get; set; }
```

- *Type:* string

If specified, the environment attempts to use this value as the prefix for the CNAME in your Elastic Beanstalk environment URL.

If not specified, the CNAME is generated automatically by appending a random alphanumeric string to the environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#cname_prefix ElasticbeanstalkEnvironment#cname_prefix}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Your description for this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#description ElasticbeanstalkEnvironment#description}

---

##### `EnvironmentName`<sup>Optional</sup> <a name="EnvironmentName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.environmentName"></a>

```csharp
public string EnvironmentName { get; set; }
```

- *Type:* string

A unique name for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#environment_name ElasticbeanstalkEnvironment#environment_name}

---

##### `OperationsRole`<sup>Optional</sup> <a name="OperationsRole" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.operationsRole"></a>

```csharp
public string OperationsRole { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#operations_role ElasticbeanstalkEnvironment#operations_role}

---

##### `OptionSettings`<sup>Optional</sup> <a name="OptionSettings" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.optionSettings"></a>

```csharp
public IResolvable|ElasticbeanstalkEnvironmentOptionSettings[] OptionSettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>[]

Key-value pairs defining configuration options for this environment, such as the instance type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#option_settings ElasticbeanstalkEnvironment#option_settings}

---

##### `PlatformArn`<sup>Optional</sup> <a name="PlatformArn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.platformArn"></a>

```csharp
public string PlatformArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the custom platform to use with the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#platform_arn ElasticbeanstalkEnvironment#platform_arn}

---

##### `SolutionStackName`<sup>Optional</sup> <a name="SolutionStackName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.solutionStackName"></a>

```csharp
public string SolutionStackName { get; set; }
```

- *Type:* string

The name of an Elastic Beanstalk solution stack (platform version) to use with the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#solution_stack_name ElasticbeanstalkEnvironment#solution_stack_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.tags"></a>

```csharp
public IResolvable|ElasticbeanstalkEnvironmentTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>[]

Specifies the tags applied to resources in the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#tags ElasticbeanstalkEnvironment#tags}

---

##### `TemplateName`<sup>Optional</sup> <a name="TemplateName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.templateName"></a>

```csharp
public string TemplateName { get; set; }
```

- *Type:* string

The name of the Elastic Beanstalk configuration template to use with the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#template_name ElasticbeanstalkEnvironment#template_name}

---

##### `Tier`<sup>Optional</sup> <a name="Tier" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.tier"></a>

```csharp
public ElasticbeanstalkEnvironmentTier Tier { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a>

Specifies the tier to use in creating this environment.

The environment tier that you choose determines whether Elastic Beanstalk provisions resources to support a web application that handles HTTP(S) requests or a web application that handles background-processing tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#tier ElasticbeanstalkEnvironment#tier}

---

##### `VersionLabel`<sup>Optional</sup> <a name="VersionLabel" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.versionLabel"></a>

```csharp
public string VersionLabel { get; set; }
```

- *Type:* string

The name of the application version to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#version_label ElasticbeanstalkEnvironment#version_label}

---

### ElasticbeanstalkEnvironmentOptionSettings <a name="ElasticbeanstalkEnvironmentOptionSettings" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticbeanstalkEnvironmentOptionSettings {
    string Namespace = null,
    string OptionName = null,
    string ResourceName = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.namespace">Namespace</a></code> | <code>string</code> | A unique namespace that identifies the option's associated AWS resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.optionName">OptionName</a></code> | <code>string</code> | The name of the configuration option. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.resourceName">ResourceName</a></code> | <code>string</code> | A unique resource name for the option setting. Use it for a time–based scaling configuration option. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.value">Value</a></code> | <code>string</code> | The current value for the configuration option. |

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

A unique namespace that identifies the option's associated AWS resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#namespace ElasticbeanstalkEnvironment#namespace}

---

##### `OptionName`<sup>Optional</sup> <a name="OptionName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.optionName"></a>

```csharp
public string OptionName { get; set; }
```

- *Type:* string

The name of the configuration option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#option_name ElasticbeanstalkEnvironment#option_name}

---

##### `ResourceName`<sup>Optional</sup> <a name="ResourceName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.resourceName"></a>

```csharp
public string ResourceName { get; set; }
```

- *Type:* string

A unique resource name for the option setting. Use it for a time–based scaling configuration option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#resource_name ElasticbeanstalkEnvironment#resource_name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The current value for the configuration option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#value ElasticbeanstalkEnvironment#value}

---

### ElasticbeanstalkEnvironmentTags <a name="ElasticbeanstalkEnvironmentTags" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticbeanstalkEnvironmentTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#key ElasticbeanstalkEnvironment#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#value ElasticbeanstalkEnvironment#value}

---

### ElasticbeanstalkEnvironmentTier <a name="ElasticbeanstalkEnvironmentTier" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticbeanstalkEnvironmentTier {
    string Name = null,
    string Type = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier.property.name">Name</a></code> | <code>string</code> | The name of this environment tier. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier.property.type">Type</a></code> | <code>string</code> | The type of this environment tier. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier.property.version">Version</a></code> | <code>string</code> | The version of this environment tier. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of this environment tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#name ElasticbeanstalkEnvironment#name}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of this environment tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#type ElasticbeanstalkEnvironment#type}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The version of this environment tier.

When you don't set a value to it, Elastic Beanstalk uses the latest compatible worker tier version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#version ElasticbeanstalkEnvironment#version}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticbeanstalkEnvironmentOptionSettingsList <a name="ElasticbeanstalkEnvironmentOptionSettingsList" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticbeanstalkEnvironmentOptionSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.get"></a>

```csharp
private ElasticbeanstalkEnvironmentOptionSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.property.internalValue"></a>

```csharp
public IResolvable|ElasticbeanstalkEnvironmentOptionSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>[]

---


### ElasticbeanstalkEnvironmentOptionSettingsOutputReference <a name="ElasticbeanstalkEnvironmentOptionSettingsOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticbeanstalkEnvironmentOptionSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetOptionName">ResetOptionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetResourceName">ResetResourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetOptionName` <a name="ResetOptionName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetOptionName"></a>

```csharp
private void ResetOptionName()
```

##### `ResetResourceName` <a name="ResetResourceName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetResourceName"></a>

```csharp
private void ResetResourceName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.optionNameInput">OptionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.resourceNameInput">ResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.optionName">OptionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OptionNameInput`<sup>Optional</sup> <a name="OptionNameInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.optionNameInput"></a>

```csharp
public string OptionNameInput { get; }
```

- *Type:* string

---

##### `ResourceNameInput`<sup>Optional</sup> <a name="ResourceNameInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.resourceNameInput"></a>

```csharp
public string ResourceNameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `OptionName`<sup>Required</sup> <a name="OptionName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.optionName"></a>

```csharp
public string OptionName { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticbeanstalkEnvironmentOptionSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>

---


### ElasticbeanstalkEnvironmentTagsList <a name="ElasticbeanstalkEnvironmentTagsList" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticbeanstalkEnvironmentTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.get"></a>

```csharp
private ElasticbeanstalkEnvironmentTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.property.internalValue"></a>

```csharp
public IResolvable|ElasticbeanstalkEnvironmentTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>[]

---


### ElasticbeanstalkEnvironmentTagsOutputReference <a name="ElasticbeanstalkEnvironmentTagsOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticbeanstalkEnvironmentTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticbeanstalkEnvironmentTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>

---


### ElasticbeanstalkEnvironmentTierOutputReference <a name="ElasticbeanstalkEnvironmentTierOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticbeanstalkEnvironmentTierOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticbeanstalkEnvironmentTier InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a>

---



