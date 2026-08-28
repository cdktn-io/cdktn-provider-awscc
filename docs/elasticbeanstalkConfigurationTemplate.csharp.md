# `elasticbeanstalkConfigurationTemplate` Submodule <a name="`elasticbeanstalkConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticbeanstalkConfigurationTemplate <a name="ElasticbeanstalkConfigurationTemplate" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_configuration_template awscc_elasticbeanstalk_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticbeanstalkConfigurationTemplate(Construct Scope, string Id, ElasticbeanstalkConfigurationTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig">ElasticbeanstalkConfigurationTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig">ElasticbeanstalkConfigurationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putOptionSettings">PutOptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putSourceConfiguration">PutSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetEnvironmentId">ResetEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetOptionSettings">ResetOptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetPlatformArn">ResetPlatformArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetSolutionStackName">ResetSolutionStackName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetSourceConfiguration">ResetSourceConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOptionSettings` <a name="PutOptionSettings" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putOptionSettings"></a>

```csharp
private void PutOptionSettings(IResolvable|ElasticbeanstalkConfigurationTemplateOptionSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putOptionSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>[]

---

##### `PutSourceConfiguration` <a name="PutSourceConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putSourceConfiguration"></a>

```csharp
private void PutSourceConfiguration(ElasticbeanstalkConfigurationTemplateSourceConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putSourceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnvironmentId` <a name="ResetEnvironmentId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetEnvironmentId"></a>

```csharp
private void ResetEnvironmentId()
```

##### `ResetOptionSettings` <a name="ResetOptionSettings" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetOptionSettings"></a>

```csharp
private void ResetOptionSettings()
```

##### `ResetPlatformArn` <a name="ResetPlatformArn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetPlatformArn"></a>

```csharp
private void ResetPlatformArn()
```

##### `ResetSolutionStackName` <a name="ResetSolutionStackName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetSolutionStackName"></a>

```csharp
private void ResetSolutionStackName()
```

##### `ResetSourceConfiguration` <a name="ResetSourceConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetSourceConfiguration"></a>

```csharp
private void ResetSourceConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ElasticbeanstalkConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticbeanstalkConfigurationTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticbeanstalkConfigurationTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticbeanstalkConfigurationTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticbeanstalkConfigurationTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ElasticbeanstalkConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElasticbeanstalkConfigurationTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElasticbeanstalkConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ElasticbeanstalkConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.optionSettings">OptionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList">ElasticbeanstalkConfigurationTemplateOptionSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.sourceConfiguration">SourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference">ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.templateName">TemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.applicationNameInput">ApplicationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.environmentIdInput">EnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.optionSettingsInput">OptionSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.platformArnInput">PlatformArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.solutionStackNameInput">SolutionStackNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.sourceConfigurationInput">SourceConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.applicationName">ApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.environmentId">EnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.platformArn">PlatformArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.solutionStackName">SolutionStackName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OptionSettings`<sup>Required</sup> <a name="OptionSettings" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.optionSettings"></a>

```csharp
public ElasticbeanstalkConfigurationTemplateOptionSettingsList OptionSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList">ElasticbeanstalkConfigurationTemplateOptionSettingsList</a>

---

##### `SourceConfiguration`<sup>Required</sup> <a name="SourceConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.sourceConfiguration"></a>

```csharp
public ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference SourceConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference">ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference</a>

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.templateName"></a>

```csharp
public string TemplateName { get; }
```

- *Type:* string

---

##### `ApplicationNameInput`<sup>Optional</sup> <a name="ApplicationNameInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.applicationNameInput"></a>

```csharp
public string ApplicationNameInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnvironmentIdInput`<sup>Optional</sup> <a name="EnvironmentIdInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.environmentIdInput"></a>

```csharp
public string EnvironmentIdInput { get; }
```

- *Type:* string

---

##### `OptionSettingsInput`<sup>Optional</sup> <a name="OptionSettingsInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.optionSettingsInput"></a>

```csharp
public IResolvable|ElasticbeanstalkConfigurationTemplateOptionSettings[] OptionSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>[]

---

##### `PlatformArnInput`<sup>Optional</sup> <a name="PlatformArnInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.platformArnInput"></a>

```csharp
public string PlatformArnInput { get; }
```

- *Type:* string

---

##### `SolutionStackNameInput`<sup>Optional</sup> <a name="SolutionStackNameInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.solutionStackNameInput"></a>

```csharp
public string SolutionStackNameInput { get; }
```

- *Type:* string

---

##### `SourceConfigurationInput`<sup>Optional</sup> <a name="SourceConfigurationInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.sourceConfigurationInput"></a>

```csharp
public IResolvable|ElasticbeanstalkConfigurationTemplateSourceConfiguration SourceConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a>

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.applicationName"></a>

```csharp
public string ApplicationName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.environmentId"></a>

```csharp
public string EnvironmentId { get; }
```

- *Type:* string

---

##### `PlatformArn`<sup>Required</sup> <a name="PlatformArn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.platformArn"></a>

```csharp
public string PlatformArn { get; }
```

- *Type:* string

---

##### `SolutionStackName`<sup>Required</sup> <a name="SolutionStackName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.solutionStackName"></a>

```csharp
public string SolutionStackName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticbeanstalkConfigurationTemplateConfig <a name="ElasticbeanstalkConfigurationTemplateConfig" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticbeanstalkConfigurationTemplateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApplicationName,
    string Description = null,
    string EnvironmentId = null,
    IResolvable|ElasticbeanstalkConfigurationTemplateOptionSettings[] OptionSettings = null,
    string PlatformArn = null,
    string SolutionStackName = null,
    ElasticbeanstalkConfigurationTemplateSourceConfiguration SourceConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.applicationName">ApplicationName</a></code> | <code>string</code> | The name of the Elastic Beanstalk application to associate with this configuration template. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.description">Description</a></code> | <code>string</code> | An optional description for this configuration. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.environmentId">EnvironmentId</a></code> | <code>string</code> | The ID of an environment whose settings you want to use to create the configuration template. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.optionSettings">OptionSettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>[]</code> | Option values for the Elastic Beanstalk configuration, such as the instance type. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.platformArn">PlatformArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the custom platform. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.solutionStackName">SolutionStackName</a></code> | <code>string</code> | The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.sourceConfiguration">SourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a></code> | An Elastic Beanstalk configuration template to base this one on. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.applicationName"></a>

```csharp
public string ApplicationName { get; set; }
```

- *Type:* string

The name of the Elastic Beanstalk application to associate with this configuration template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_configuration_template#application_name ElasticbeanstalkConfigurationTemplate#application_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description for this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_configuration_template#description ElasticbeanstalkConfigurationTemplate#description}

---

##### `EnvironmentId`<sup>Optional</sup> <a name="EnvironmentId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.environmentId"></a>

```csharp
public string EnvironmentId { get; set; }
```

- *Type:* string

The ID of an environment whose settings you want to use to create the configuration template.

You must specify EnvironmentId if you don't specify PlatformArn, SolutionStackName, or SourceConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_configuration_template#environment_id ElasticbeanstalkConfigurationTemplate#environment_id}

---

##### `OptionSettings`<sup>Optional</sup> <a name="OptionSettings" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.optionSettings"></a>

```csharp
public IResolvable|ElasticbeanstalkConfigurationTemplateOptionSettings[] OptionSettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>[]

Option values for the Elastic Beanstalk configuration, such as the instance type.

If specified, these values override the values obtained from the solution stack or the source configuration template. For a complete list of Elastic Beanstalk configuration options, see [Option Values](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html) in the AWS Elastic Beanstalk Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_configuration_template#option_settings ElasticbeanstalkConfigurationTemplate#option_settings}

---

##### `PlatformArn`<sup>Optional</sup> <a name="PlatformArn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.platformArn"></a>

```csharp
public string PlatformArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the custom platform.

For more information, see [Custom Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/custom-platforms.html) in the AWS Elastic Beanstalk Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_configuration_template#platform_arn ElasticbeanstalkConfigurationTemplate#platform_arn}

---

##### `SolutionStackName`<sup>Optional</sup> <a name="SolutionStackName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.solutionStackName"></a>

```csharp
public string SolutionStackName { get; set; }
```

- *Type:* string

The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses.

For example, 64bit Amazon Linux 2013.09 running Tomcat 7 Java 7. A solution stack specifies the operating system, runtime, and application server for a configuration template. It also determines the set of configuration options as well as the possible and default values. For more information, see [Supported Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html) in the AWS Elastic Beanstalk Developer Guide.

You must specify SolutionStackName if you don't specify PlatformArn, EnvironmentId, or SourceConfiguration.

Use the ListAvailableSolutionStacks API to obtain a list of available solution stacks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_configuration_template#solution_stack_name ElasticbeanstalkConfigurationTemplate#solution_stack_name}

---

##### `SourceConfiguration`<sup>Optional</sup> <a name="SourceConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.sourceConfiguration"></a>

```csharp
public ElasticbeanstalkConfigurationTemplateSourceConfiguration SourceConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a>

An Elastic Beanstalk configuration template to base this one on.

If specified, Elastic Beanstalk uses the configuration values from the specified configuration template to create a new configuration.

Values specified in OptionSettings override any values obtained from the SourceConfiguration.

You must specify SourceConfiguration if you don't specify PlatformArn, EnvironmentId, or SolutionStackName.

Constraint: If both solution stack name and source configuration are specified, the solution stack of the source configuration template must match the specified solution stack name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_configuration_template#source_configuration ElasticbeanstalkConfigurationTemplate#source_configuration}

---

### ElasticbeanstalkConfigurationTemplateOptionSettings <a name="ElasticbeanstalkConfigurationTemplateOptionSettings" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticbeanstalkConfigurationTemplateOptionSettings {
    string Namespace = null,
    string OptionName = null,
    string ResourceName = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.namespace">Namespace</a></code> | <code>string</code> | A unique namespace that identifies the option's associated AWS resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.optionName">OptionName</a></code> | <code>string</code> | The name of the configuration option. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.resourceName">ResourceName</a></code> | <code>string</code> | A unique resource name for the option setting. Use it for a time–based scaling configuration option. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.value">Value</a></code> | <code>string</code> | The current value for the configuration option. |

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

A unique namespace that identifies the option's associated AWS resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_configuration_template#namespace ElasticbeanstalkConfigurationTemplate#namespace}

---

##### `OptionName`<sup>Optional</sup> <a name="OptionName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.optionName"></a>

```csharp
public string OptionName { get; set; }
```

- *Type:* string

The name of the configuration option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_configuration_template#option_name ElasticbeanstalkConfigurationTemplate#option_name}

---

##### `ResourceName`<sup>Optional</sup> <a name="ResourceName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.resourceName"></a>

```csharp
public string ResourceName { get; set; }
```

- *Type:* string

A unique resource name for the option setting. Use it for a time–based scaling configuration option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_configuration_template#resource_name ElasticbeanstalkConfigurationTemplate#resource_name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The current value for the configuration option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_configuration_template#value ElasticbeanstalkConfigurationTemplate#value}

---

### ElasticbeanstalkConfigurationTemplateSourceConfiguration <a name="ElasticbeanstalkConfigurationTemplateSourceConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticbeanstalkConfigurationTemplateSourceConfiguration {
    string ApplicationName = null,
    string TemplateName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration.property.applicationName">ApplicationName</a></code> | <code>string</code> | The name of the application associated with the configuration. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration.property.templateName">TemplateName</a></code> | <code>string</code> | The name of the configuration template. |

---

##### `ApplicationName`<sup>Optional</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration.property.applicationName"></a>

```csharp
public string ApplicationName { get; set; }
```

- *Type:* string

The name of the application associated with the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_configuration_template#application_name ElasticbeanstalkConfigurationTemplate#application_name}

---

##### `TemplateName`<sup>Optional</sup> <a name="TemplateName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration.property.templateName"></a>

```csharp
public string TemplateName { get; set; }
```

- *Type:* string

The name of the configuration template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_configuration_template#template_name ElasticbeanstalkConfigurationTemplate#template_name}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticbeanstalkConfigurationTemplateOptionSettingsList <a name="ElasticbeanstalkConfigurationTemplateOptionSettingsList" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticbeanstalkConfigurationTemplateOptionSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.get"></a>

```csharp
private ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.property.internalValue"></a>

```csharp
public IResolvable|ElasticbeanstalkConfigurationTemplateOptionSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>[]

---


### ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference <a name="ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetOptionName">ResetOptionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetResourceName">ResetResourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetOptionName` <a name="ResetOptionName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetOptionName"></a>

```csharp
private void ResetOptionName()
```

##### `ResetResourceName` <a name="ResetResourceName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetResourceName"></a>

```csharp
private void ResetResourceName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.optionNameInput">OptionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.resourceNameInput">ResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.optionName">OptionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OptionNameInput`<sup>Optional</sup> <a name="OptionNameInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.optionNameInput"></a>

```csharp
public string OptionNameInput { get; }
```

- *Type:* string

---

##### `ResourceNameInput`<sup>Optional</sup> <a name="ResourceNameInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.resourceNameInput"></a>

```csharp
public string ResourceNameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `OptionName`<sup>Required</sup> <a name="OptionName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.optionName"></a>

```csharp
public string OptionName { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticbeanstalkConfigurationTemplateOptionSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>

---


### ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference <a name="ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resetApplicationName">ResetApplicationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resetTemplateName">ResetTemplateName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationName` <a name="ResetApplicationName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resetApplicationName"></a>

```csharp
private void ResetApplicationName()
```

##### `ResetTemplateName` <a name="ResetTemplateName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resetTemplateName"></a>

```csharp
private void ResetTemplateName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.applicationNameInput">ApplicationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.templateNameInput">TemplateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.applicationName">ApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.templateName">TemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationNameInput`<sup>Optional</sup> <a name="ApplicationNameInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.applicationNameInput"></a>

```csharp
public string ApplicationNameInput { get; }
```

- *Type:* string

---

##### `TemplateNameInput`<sup>Optional</sup> <a name="TemplateNameInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.templateNameInput"></a>

```csharp
public string TemplateNameInput { get; }
```

- *Type:* string

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.applicationName"></a>

```csharp
public string ApplicationName { get; }
```

- *Type:* string

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.templateName"></a>

```csharp
public string TemplateName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticbeanstalkConfigurationTemplateSourceConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a>

---



