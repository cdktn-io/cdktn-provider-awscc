# `cognitoUserPoolRegionalConfigurationAttachment` Submodule <a name="`cognitoUserPoolRegionalConfigurationAttachment` Submodule" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolRegionalConfigurationAttachment <a name="CognitoUserPoolRegionalConfigurationAttachment" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment awscc_cognito_user_pool_regional_configuration_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRegionalConfigurationAttachment(Construct Scope, string Id, CognitoUserPoolRegionalConfigurationAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig">CognitoUserPoolRegionalConfigurationAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig">CognitoUserPoolRegionalConfigurationAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putEmailConfiguration">PutEmailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putLambdaConfig">PutLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putSmsConfiguration">PutSmsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetEmailConfiguration">ResetEmailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetLambdaConfig">ResetLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetSmsConfiguration">ResetSmsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetUserPoolTags">ResetUserPoolTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEmailConfiguration` <a name="PutEmailConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putEmailConfiguration"></a>

```csharp
private void PutEmailConfiguration(CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putEmailConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a>

---

##### `PutLambdaConfig` <a name="PutLambdaConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putLambdaConfig"></a>

```csharp
private void PutLambdaConfig(CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putLambdaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a>

---

##### `PutSmsConfiguration` <a name="PutSmsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putSmsConfiguration"></a>

```csharp
private void PutSmsConfiguration(CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putSmsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a>

---

##### `ResetEmailConfiguration` <a name="ResetEmailConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetEmailConfiguration"></a>

```csharp
private void ResetEmailConfiguration()
```

##### `ResetLambdaConfig` <a name="ResetLambdaConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetLambdaConfig"></a>

```csharp
private void ResetLambdaConfig()
```

##### `ResetSmsConfiguration` <a name="ResetSmsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetSmsConfiguration"></a>

```csharp
private void ResetSmsConfiguration()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetUserPoolTags` <a name="ResetUserPoolTags" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetUserPoolTags"></a>

```csharp
private void ResetUserPoolTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoUserPoolRegionalConfigurationAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoUserPoolRegionalConfigurationAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoUserPoolRegionalConfigurationAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoUserPoolRegionalConfigurationAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoUserPoolRegionalConfigurationAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CognitoUserPoolRegionalConfigurationAttachment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitoUserPoolRegionalConfigurationAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitoUserPoolRegionalConfigurationAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CognitoUserPoolRegionalConfigurationAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.emailConfiguration">EmailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference">CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.lambdaConfig">LambdaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.smsConfiguration">SmsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.emailConfigurationInput">EmailConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.lambdaConfigInput">LambdaConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.smsConfigurationInput">SmsConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolTagsInput">UserPoolTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolId">UserPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolTags">UserPoolTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EmailConfiguration`<sup>Required</sup> <a name="EmailConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.emailConfiguration"></a>

```csharp
public CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference EmailConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference">CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LambdaConfig`<sup>Required</sup> <a name="LambdaConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.lambdaConfig"></a>

```csharp
public CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference LambdaConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference</a>

---

##### `SmsConfiguration`<sup>Required</sup> <a name="SmsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.smsConfiguration"></a>

```csharp
public CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference SmsConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference</a>

---

##### `EmailConfigurationInput`<sup>Optional</sup> <a name="EmailConfigurationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.emailConfigurationInput"></a>

```csharp
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration EmailConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a>

---

##### `LambdaConfigInput`<sup>Optional</sup> <a name="LambdaConfigInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.lambdaConfigInput"></a>

```csharp
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig LambdaConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a>

---

##### `SmsConfigurationInput`<sup>Optional</sup> <a name="SmsConfigurationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.smsConfigurationInput"></a>

```csharp
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration SmsConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a>

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolIdInput"></a>

```csharp
public string UserPoolIdInput { get; }
```

- *Type:* string

---

##### `UserPoolTagsInput`<sup>Optional</sup> <a name="UserPoolTagsInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> UserPoolTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolId"></a>

```csharp
public string UserPoolId { get; }
```

- *Type:* string

---

##### `UserPoolTags`<sup>Required</sup> <a name="UserPoolTags" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> UserPoolTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolRegionalConfigurationAttachmentConfig <a name="CognitoUserPoolRegionalConfigurationAttachmentConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRegionalConfigurationAttachmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string UserPoolId,
    CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration EmailConfiguration = null,
    CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig LambdaConfig = null,
    CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration SmsConfiguration = null,
    string Status = null,
    System.Collections.Generic.IDictionary<string, string> UserPoolTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.userPoolId">UserPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_id CognitoUserPoolRegionalConfigurationAttachment#user_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.emailConfiguration">EmailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#email_configuration CognitoUserPoolRegionalConfigurationAttachment#email_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.lambdaConfig">LambdaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_config CognitoUserPoolRegionalConfigurationAttachment#lambda_config}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.smsConfiguration">SmsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sms_configuration CognitoUserPoolRegionalConfigurationAttachment#sms_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.status">Status</a></code> | <code>string</code> | The status of the replica. Set to ACTIVE or INACTIVE. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.userPoolTags">UserPoolTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_tags CognitoUserPoolRegionalConfigurationAttachment#user_pool_tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.userPoolId"></a>

```csharp
public string UserPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_id CognitoUserPoolRegionalConfigurationAttachment#user_pool_id}.

---

##### `EmailConfiguration`<sup>Optional</sup> <a name="EmailConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.emailConfiguration"></a>

```csharp
public CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration EmailConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#email_configuration CognitoUserPoolRegionalConfigurationAttachment#email_configuration}.

---

##### `LambdaConfig`<sup>Optional</sup> <a name="LambdaConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.lambdaConfig"></a>

```csharp
public CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig LambdaConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_config CognitoUserPoolRegionalConfigurationAttachment#lambda_config}.

---

##### `SmsConfiguration`<sup>Optional</sup> <a name="SmsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.smsConfiguration"></a>

```csharp
public CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration SmsConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sms_configuration CognitoUserPoolRegionalConfigurationAttachment#sms_configuration}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

The status of the replica. Set to ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#status CognitoUserPoolRegionalConfigurationAttachment#status}

---

##### `UserPoolTags`<sup>Optional</sup> <a name="UserPoolTags" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.userPoolTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> UserPoolTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_tags CognitoUserPoolRegionalConfigurationAttachment#user_pool_tags}.

---

### CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration <a name="CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration {
    string ConfigurationSet = null,
    string EmailSendingAccount = null,
    string From = null,
    string ReplyToEmailAddress = null,
    string SourceArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.configurationSet">ConfigurationSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#configuration_set CognitoUserPoolRegionalConfigurationAttachment#configuration_set}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.emailSendingAccount">EmailSendingAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#email_sending_account CognitoUserPoolRegionalConfigurationAttachment#email_sending_account}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.from">From</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#from CognitoUserPoolRegionalConfigurationAttachment#from}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.replyToEmailAddress">ReplyToEmailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#reply_to_email_address CognitoUserPoolRegionalConfigurationAttachment#reply_to_email_address}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.sourceArn">SourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#source_arn CognitoUserPoolRegionalConfigurationAttachment#source_arn}. |

---

##### `ConfigurationSet`<sup>Optional</sup> <a name="ConfigurationSet" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.configurationSet"></a>

```csharp
public string ConfigurationSet { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#configuration_set CognitoUserPoolRegionalConfigurationAttachment#configuration_set}.

---

##### `EmailSendingAccount`<sup>Optional</sup> <a name="EmailSendingAccount" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.emailSendingAccount"></a>

```csharp
public string EmailSendingAccount { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#email_sending_account CognitoUserPoolRegionalConfigurationAttachment#email_sending_account}.

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#from CognitoUserPoolRegionalConfigurationAttachment#from}.

---

##### `ReplyToEmailAddress`<sup>Optional</sup> <a name="ReplyToEmailAddress" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.replyToEmailAddress"></a>

```csharp
public string ReplyToEmailAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#reply_to_email_address CognitoUserPoolRegionalConfigurationAttachment#reply_to_email_address}.

---

##### `SourceArn`<sup>Optional</sup> <a name="SourceArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.sourceArn"></a>

```csharp
public string SourceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#source_arn CognitoUserPoolRegionalConfigurationAttachment#source_arn}.

---

### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig {
    string CreateAuthChallenge = null,
    CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender CustomEmailSender = null,
    string CustomMessage = null,
    CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender CustomSmsSender = null,
    string DefineAuthChallenge = null,
    CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation InboundFederation = null,
    string KmsKeyId = null,
    string PostAuthentication = null,
    string PostConfirmation = null,
    string PreAuthentication = null,
    string PreSignUp = null,
    string PreTokenGeneration = null,
    CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig PreTokenGenerationConfig = null,
    string UserMigration = null,
    string VerifyAuthChallengeResponse = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.createAuthChallenge">CreateAuthChallenge</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#create_auth_challenge CognitoUserPoolRegionalConfigurationAttachment#create_auth_challenge}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.customEmailSender">CustomEmailSender</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_email_sender CognitoUserPoolRegionalConfigurationAttachment#custom_email_sender}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.customMessage">CustomMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_message CognitoUserPoolRegionalConfigurationAttachment#custom_message}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.customSmsSender">CustomSmsSender</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_sms_sender CognitoUserPoolRegionalConfigurationAttachment#custom_sms_sender}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.defineAuthChallenge">DefineAuthChallenge</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#define_auth_challenge CognitoUserPoolRegionalConfigurationAttachment#define_auth_challenge}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.inboundFederation">InboundFederation</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#inbound_federation CognitoUserPoolRegionalConfigurationAttachment#inbound_federation}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#kms_key_id CognitoUserPoolRegionalConfigurationAttachment#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.postAuthentication">PostAuthentication</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#post_authentication CognitoUserPoolRegionalConfigurationAttachment#post_authentication}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.postConfirmation">PostConfirmation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#post_confirmation CognitoUserPoolRegionalConfigurationAttachment#post_confirmation}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preAuthentication">PreAuthentication</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_authentication CognitoUserPoolRegionalConfigurationAttachment#pre_authentication}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preSignUp">PreSignUp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_sign_up CognitoUserPoolRegionalConfigurationAttachment#pre_sign_up}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preTokenGeneration">PreTokenGeneration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_token_generation CognitoUserPoolRegionalConfigurationAttachment#pre_token_generation}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preTokenGenerationConfig">PreTokenGenerationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_token_generation_config CognitoUserPoolRegionalConfigurationAttachment#pre_token_generation_config}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.userMigration">UserMigration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_migration CognitoUserPoolRegionalConfigurationAttachment#user_migration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.verifyAuthChallengeResponse">VerifyAuthChallengeResponse</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#verify_auth_challenge_response CognitoUserPoolRegionalConfigurationAttachment#verify_auth_challenge_response}. |

---

##### `CreateAuthChallenge`<sup>Optional</sup> <a name="CreateAuthChallenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.createAuthChallenge"></a>

```csharp
public string CreateAuthChallenge { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#create_auth_challenge CognitoUserPoolRegionalConfigurationAttachment#create_auth_challenge}.

---

##### `CustomEmailSender`<sup>Optional</sup> <a name="CustomEmailSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.customEmailSender"></a>

```csharp
public CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender CustomEmailSender { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_email_sender CognitoUserPoolRegionalConfigurationAttachment#custom_email_sender}.

---

##### `CustomMessage`<sup>Optional</sup> <a name="CustomMessage" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.customMessage"></a>

```csharp
public string CustomMessage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_message CognitoUserPoolRegionalConfigurationAttachment#custom_message}.

---

##### `CustomSmsSender`<sup>Optional</sup> <a name="CustomSmsSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.customSmsSender"></a>

```csharp
public CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender CustomSmsSender { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_sms_sender CognitoUserPoolRegionalConfigurationAttachment#custom_sms_sender}.

---

##### `DefineAuthChallenge`<sup>Optional</sup> <a name="DefineAuthChallenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.defineAuthChallenge"></a>

```csharp
public string DefineAuthChallenge { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#define_auth_challenge CognitoUserPoolRegionalConfigurationAttachment#define_auth_challenge}.

---

##### `InboundFederation`<sup>Optional</sup> <a name="InboundFederation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.inboundFederation"></a>

```csharp
public CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation InboundFederation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#inbound_federation CognitoUserPoolRegionalConfigurationAttachment#inbound_federation}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#kms_key_id CognitoUserPoolRegionalConfigurationAttachment#kms_key_id}.

---

##### `PostAuthentication`<sup>Optional</sup> <a name="PostAuthentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.postAuthentication"></a>

```csharp
public string PostAuthentication { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#post_authentication CognitoUserPoolRegionalConfigurationAttachment#post_authentication}.

---

##### `PostConfirmation`<sup>Optional</sup> <a name="PostConfirmation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.postConfirmation"></a>

```csharp
public string PostConfirmation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#post_confirmation CognitoUserPoolRegionalConfigurationAttachment#post_confirmation}.

---

##### `PreAuthentication`<sup>Optional</sup> <a name="PreAuthentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preAuthentication"></a>

```csharp
public string PreAuthentication { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_authentication CognitoUserPoolRegionalConfigurationAttachment#pre_authentication}.

---

##### `PreSignUp`<sup>Optional</sup> <a name="PreSignUp" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preSignUp"></a>

```csharp
public string PreSignUp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_sign_up CognitoUserPoolRegionalConfigurationAttachment#pre_sign_up}.

---

##### `PreTokenGeneration`<sup>Optional</sup> <a name="PreTokenGeneration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preTokenGeneration"></a>

```csharp
public string PreTokenGeneration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_token_generation CognitoUserPoolRegionalConfigurationAttachment#pre_token_generation}.

---

##### `PreTokenGenerationConfig`<sup>Optional</sup> <a name="PreTokenGenerationConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preTokenGenerationConfig"></a>

```csharp
public CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig PreTokenGenerationConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_token_generation_config CognitoUserPoolRegionalConfigurationAttachment#pre_token_generation_config}.

---

##### `UserMigration`<sup>Optional</sup> <a name="UserMigration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.userMigration"></a>

```csharp
public string UserMigration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_migration CognitoUserPoolRegionalConfigurationAttachment#user_migration}.

---

##### `VerifyAuthChallengeResponse`<sup>Optional</sup> <a name="VerifyAuthChallengeResponse" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.verifyAuthChallengeResponse"></a>

```csharp
public string VerifyAuthChallengeResponse { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#verify_auth_challenge_response CognitoUserPoolRegionalConfigurationAttachment#verify_auth_challenge_response}.

---

### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender {
    string LambdaArn = null,
    string LambdaVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender.property.lambdaVersion">LambdaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}. |

---

##### `LambdaArn`<sup>Optional</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}.

---

##### `LambdaVersion`<sup>Optional</sup> <a name="LambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender.property.lambdaVersion"></a>

```csharp
public string LambdaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}.

---

### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender {
    string LambdaArn = null,
    string LambdaVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender.property.lambdaVersion">LambdaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}. |

---

##### `LambdaArn`<sup>Optional</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}.

---

##### `LambdaVersion`<sup>Optional</sup> <a name="LambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender.property.lambdaVersion"></a>

```csharp
public string LambdaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}.

---

### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation {
    string LambdaArn = null,
    string LambdaVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation.property.lambdaVersion">LambdaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}. |

---

##### `LambdaArn`<sup>Optional</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}.

---

##### `LambdaVersion`<sup>Optional</sup> <a name="LambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation.property.lambdaVersion"></a>

```csharp
public string LambdaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}.

---

### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig {
    string LambdaArn = null,
    string LambdaVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig.property.lambdaVersion">LambdaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}. |

---

##### `LambdaArn`<sup>Optional</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}.

---

##### `LambdaVersion`<sup>Optional</sup> <a name="LambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig.property.lambdaVersion"></a>

```csharp
public string LambdaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}.

---

### CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration <a name="CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration {
    CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms EumsSms = null,
    string ExternalId = null,
    string SnsCallerArn = null,
    string SnsRegion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.eumsSms">EumsSms</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#eums_sms CognitoUserPoolRegionalConfigurationAttachment#eums_sms}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.externalId">ExternalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#external_id CognitoUserPoolRegionalConfigurationAttachment#external_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.snsCallerArn">SnsCallerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sns_caller_arn CognitoUserPoolRegionalConfigurationAttachment#sns_caller_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.snsRegion">SnsRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sns_region CognitoUserPoolRegionalConfigurationAttachment#sns_region}. |

---

##### `EumsSms`<sup>Optional</sup> <a name="EumsSms" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.eumsSms"></a>

```csharp
public CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms EumsSms { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#eums_sms CognitoUserPoolRegionalConfigurationAttachment#eums_sms}.

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#external_id CognitoUserPoolRegionalConfigurationAttachment#external_id}.

---

##### `SnsCallerArn`<sup>Optional</sup> <a name="SnsCallerArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.snsCallerArn"></a>

```csharp
public string SnsCallerArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sns_caller_arn CognitoUserPoolRegionalConfigurationAttachment#sns_caller_arn}.

---

##### `SnsRegion`<sup>Optional</sup> <a name="SnsRegion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.snsRegion"></a>

```csharp
public string SnsRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sns_region CognitoUserPoolRegionalConfigurationAttachment#sns_region}.

---

### CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms <a name="CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms {
    string CallerArn = null,
    string ConfigurationSetName = null,
    string ExternalId = null,
    string InEntityId = null,
    string InTemplateId = null,
    string OriginationIdentity = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.callerArn">CallerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#caller_arn CognitoUserPoolRegionalConfigurationAttachment#caller_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.configurationSetName">ConfigurationSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#configuration_set_name CognitoUserPoolRegionalConfigurationAttachment#configuration_set_name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.externalId">ExternalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#external_id CognitoUserPoolRegionalConfigurationAttachment#external_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.inEntityId">InEntityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#in_entity_id CognitoUserPoolRegionalConfigurationAttachment#in_entity_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.inTemplateId">InTemplateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#in_template_id CognitoUserPoolRegionalConfigurationAttachment#in_template_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.originationIdentity">OriginationIdentity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#origination_identity CognitoUserPoolRegionalConfigurationAttachment#origination_identity}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#region CognitoUserPoolRegionalConfigurationAttachment#region}. |

---

##### `CallerArn`<sup>Optional</sup> <a name="CallerArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.callerArn"></a>

```csharp
public string CallerArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#caller_arn CognitoUserPoolRegionalConfigurationAttachment#caller_arn}.

---

##### `ConfigurationSetName`<sup>Optional</sup> <a name="ConfigurationSetName" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.configurationSetName"></a>

```csharp
public string ConfigurationSetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#configuration_set_name CognitoUserPoolRegionalConfigurationAttachment#configuration_set_name}.

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#external_id CognitoUserPoolRegionalConfigurationAttachment#external_id}.

---

##### `InEntityId`<sup>Optional</sup> <a name="InEntityId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.inEntityId"></a>

```csharp
public string InEntityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#in_entity_id CognitoUserPoolRegionalConfigurationAttachment#in_entity_id}.

---

##### `InTemplateId`<sup>Optional</sup> <a name="InTemplateId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.inTemplateId"></a>

```csharp
public string InTemplateId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#in_template_id CognitoUserPoolRegionalConfigurationAttachment#in_template_id}.

---

##### `OriginationIdentity`<sup>Optional</sup> <a name="OriginationIdentity" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.originationIdentity"></a>

```csharp
public string OriginationIdentity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#origination_identity CognitoUserPoolRegionalConfigurationAttachment#origination_identity}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#region CognitoUserPoolRegionalConfigurationAttachment#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetConfigurationSet">ResetConfigurationSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetEmailSendingAccount">ResetEmailSendingAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetReplyToEmailAddress">ResetReplyToEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetSourceArn">ResetSourceArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfigurationSet` <a name="ResetConfigurationSet" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetConfigurationSet"></a>

```csharp
private void ResetConfigurationSet()
```

##### `ResetEmailSendingAccount` <a name="ResetEmailSendingAccount" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetEmailSendingAccount"></a>

```csharp
private void ResetEmailSendingAccount()
```

##### `ResetFrom` <a name="ResetFrom" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetFrom"></a>

```csharp
private void ResetFrom()
```

##### `ResetReplyToEmailAddress` <a name="ResetReplyToEmailAddress" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetReplyToEmailAddress"></a>

```csharp
private void ResetReplyToEmailAddress()
```

##### `ResetSourceArn` <a name="ResetSourceArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetSourceArn"></a>

```csharp
private void ResetSourceArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.configurationSetInput">ConfigurationSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.emailSendingAccountInput">EmailSendingAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.replyToEmailAddressInput">ReplyToEmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.sourceArnInput">SourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.configurationSet">ConfigurationSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.emailSendingAccount">EmailSendingAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.replyToEmailAddress">ReplyToEmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.sourceArn">SourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigurationSetInput`<sup>Optional</sup> <a name="ConfigurationSetInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.configurationSetInput"></a>

```csharp
public string ConfigurationSetInput { get; }
```

- *Type:* string

---

##### `EmailSendingAccountInput`<sup>Optional</sup> <a name="EmailSendingAccountInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.emailSendingAccountInput"></a>

```csharp
public string EmailSendingAccountInput { get; }
```

- *Type:* string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `ReplyToEmailAddressInput`<sup>Optional</sup> <a name="ReplyToEmailAddressInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.replyToEmailAddressInput"></a>

```csharp
public string ReplyToEmailAddressInput { get; }
```

- *Type:* string

---

##### `SourceArnInput`<sup>Optional</sup> <a name="SourceArnInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.sourceArnInput"></a>

```csharp
public string SourceArnInput { get; }
```

- *Type:* string

---

##### `ConfigurationSet`<sup>Required</sup> <a name="ConfigurationSet" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.configurationSet"></a>

```csharp
public string ConfigurationSet { get; }
```

- *Type:* string

---

##### `EmailSendingAccount`<sup>Required</sup> <a name="EmailSendingAccount" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.emailSendingAccount"></a>

```csharp
public string EmailSendingAccount { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `ReplyToEmailAddress`<sup>Required</sup> <a name="ReplyToEmailAddress" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.replyToEmailAddress"></a>

```csharp
public string ReplyToEmailAddress { get; }
```

- *Type:* string

---

##### `SourceArn`<sup>Required</sup> <a name="SourceArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.sourceArn"></a>

```csharp
public string SourceArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a>

---


### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resetLambdaArn">ResetLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resetLambdaVersion">ResetLambdaVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLambdaArn` <a name="ResetLambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resetLambdaArn"></a>

```csharp
private void ResetLambdaArn()
```

##### `ResetLambdaVersion` <a name="ResetLambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resetLambdaVersion"></a>

```csharp
private void ResetLambdaVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaArnInput">LambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersionInput">LambdaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersion">LambdaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LambdaArnInput`<sup>Optional</sup> <a name="LambdaArnInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaArnInput"></a>

```csharp
public string LambdaArnInput { get; }
```

- *Type:* string

---

##### `LambdaVersionInput`<sup>Optional</sup> <a name="LambdaVersionInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersionInput"></a>

```csharp
public string LambdaVersionInput { get; }
```

- *Type:* string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; }
```

- *Type:* string

---

##### `LambdaVersion`<sup>Required</sup> <a name="LambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersion"></a>

```csharp
public string LambdaVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a>

---


### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resetLambdaArn">ResetLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resetLambdaVersion">ResetLambdaVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLambdaArn` <a name="ResetLambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resetLambdaArn"></a>

```csharp
private void ResetLambdaArn()
```

##### `ResetLambdaVersion` <a name="ResetLambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resetLambdaVersion"></a>

```csharp
private void ResetLambdaVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaArnInput">LambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersionInput">LambdaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersion">LambdaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LambdaArnInput`<sup>Optional</sup> <a name="LambdaArnInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaArnInput"></a>

```csharp
public string LambdaArnInput { get; }
```

- *Type:* string

---

##### `LambdaVersionInput`<sup>Optional</sup> <a name="LambdaVersionInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersionInput"></a>

```csharp
public string LambdaVersionInput { get; }
```

- *Type:* string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; }
```

- *Type:* string

---

##### `LambdaVersion`<sup>Required</sup> <a name="LambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersion"></a>

```csharp
public string LambdaVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a>

---


### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resetLambdaArn">ResetLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resetLambdaVersion">ResetLambdaVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLambdaArn` <a name="ResetLambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resetLambdaArn"></a>

```csharp
private void ResetLambdaArn()
```

##### `ResetLambdaVersion` <a name="ResetLambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resetLambdaVersion"></a>

```csharp
private void ResetLambdaVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaArnInput">LambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaVersionInput">LambdaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaVersion">LambdaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LambdaArnInput`<sup>Optional</sup> <a name="LambdaArnInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaArnInput"></a>

```csharp
public string LambdaArnInput { get; }
```

- *Type:* string

---

##### `LambdaVersionInput`<sup>Optional</sup> <a name="LambdaVersionInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaVersionInput"></a>

```csharp
public string LambdaVersionInput { get; }
```

- *Type:* string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; }
```

- *Type:* string

---

##### `LambdaVersion`<sup>Required</sup> <a name="LambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaVersion"></a>

```csharp
public string LambdaVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a>

---


### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomEmailSender">PutCustomEmailSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomSmsSender">PutCustomSmsSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putInboundFederation">PutInboundFederation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putPreTokenGenerationConfig">PutPreTokenGenerationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCreateAuthChallenge">ResetCreateAuthChallenge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCustomEmailSender">ResetCustomEmailSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCustomMessage">ResetCustomMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCustomSmsSender">ResetCustomSmsSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetDefineAuthChallenge">ResetDefineAuthChallenge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetInboundFederation">ResetInboundFederation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPostAuthentication">ResetPostAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPostConfirmation">ResetPostConfirmation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreAuthentication">ResetPreAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreSignUp">ResetPreSignUp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreTokenGeneration">ResetPreTokenGeneration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreTokenGenerationConfig">ResetPreTokenGenerationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetUserMigration">ResetUserMigration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetVerifyAuthChallengeResponse">ResetVerifyAuthChallengeResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomEmailSender` <a name="PutCustomEmailSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomEmailSender"></a>

```csharp
private void PutCustomEmailSender(CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomEmailSender.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a>

---

##### `PutCustomSmsSender` <a name="PutCustomSmsSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomSmsSender"></a>

```csharp
private void PutCustomSmsSender(CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomSmsSender.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a>

---

##### `PutInboundFederation` <a name="PutInboundFederation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putInboundFederation"></a>

```csharp
private void PutInboundFederation(CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putInboundFederation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a>

---

##### `PutPreTokenGenerationConfig` <a name="PutPreTokenGenerationConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putPreTokenGenerationConfig"></a>

```csharp
private void PutPreTokenGenerationConfig(CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putPreTokenGenerationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a>

---

##### `ResetCreateAuthChallenge` <a name="ResetCreateAuthChallenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCreateAuthChallenge"></a>

```csharp
private void ResetCreateAuthChallenge()
```

##### `ResetCustomEmailSender` <a name="ResetCustomEmailSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCustomEmailSender"></a>

```csharp
private void ResetCustomEmailSender()
```

##### `ResetCustomMessage` <a name="ResetCustomMessage" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCustomMessage"></a>

```csharp
private void ResetCustomMessage()
```

##### `ResetCustomSmsSender` <a name="ResetCustomSmsSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCustomSmsSender"></a>

```csharp
private void ResetCustomSmsSender()
```

##### `ResetDefineAuthChallenge` <a name="ResetDefineAuthChallenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetDefineAuthChallenge"></a>

```csharp
private void ResetDefineAuthChallenge()
```

##### `ResetInboundFederation` <a name="ResetInboundFederation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetInboundFederation"></a>

```csharp
private void ResetInboundFederation()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetPostAuthentication` <a name="ResetPostAuthentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPostAuthentication"></a>

```csharp
private void ResetPostAuthentication()
```

##### `ResetPostConfirmation` <a name="ResetPostConfirmation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPostConfirmation"></a>

```csharp
private void ResetPostConfirmation()
```

##### `ResetPreAuthentication` <a name="ResetPreAuthentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreAuthentication"></a>

```csharp
private void ResetPreAuthentication()
```

##### `ResetPreSignUp` <a name="ResetPreSignUp" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreSignUp"></a>

```csharp
private void ResetPreSignUp()
```

##### `ResetPreTokenGeneration` <a name="ResetPreTokenGeneration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreTokenGeneration"></a>

```csharp
private void ResetPreTokenGeneration()
```

##### `ResetPreTokenGenerationConfig` <a name="ResetPreTokenGenerationConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreTokenGenerationConfig"></a>

```csharp
private void ResetPreTokenGenerationConfig()
```

##### `ResetUserMigration` <a name="ResetUserMigration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetUserMigration"></a>

```csharp
private void ResetUserMigration()
```

##### `ResetVerifyAuthChallengeResponse` <a name="ResetVerifyAuthChallengeResponse" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetVerifyAuthChallengeResponse"></a>

```csharp
private void ResetVerifyAuthChallengeResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customEmailSender">CustomEmailSender</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customSmsSender">CustomSmsSender</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.inboundFederation">InboundFederation</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationConfig">PreTokenGenerationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.createAuthChallengeInput">CreateAuthChallengeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customEmailSenderInput">CustomEmailSenderInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customMessageInput">CustomMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customSmsSenderInput">CustomSmsSenderInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.defineAuthChallengeInput">DefineAuthChallengeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.inboundFederationInput">InboundFederationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postAuthenticationInput">PostAuthenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postConfirmationInput">PostConfirmationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preAuthenticationInput">PreAuthenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preSignUpInput">PreSignUpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationConfigInput">PreTokenGenerationConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationInput">PreTokenGenerationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.userMigrationInput">UserMigrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.verifyAuthChallengeResponseInput">VerifyAuthChallengeResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.createAuthChallenge">CreateAuthChallenge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customMessage">CustomMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.defineAuthChallenge">DefineAuthChallenge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postAuthentication">PostAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postConfirmation">PostConfirmation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preAuthentication">PreAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preSignUp">PreSignUp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGeneration">PreTokenGeneration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.userMigration">UserMigration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.verifyAuthChallengeResponse">VerifyAuthChallengeResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomEmailSender`<sup>Required</sup> <a name="CustomEmailSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customEmailSender"></a>

```csharp
public CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference CustomEmailSender { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference</a>

---

##### `CustomSmsSender`<sup>Required</sup> <a name="CustomSmsSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customSmsSender"></a>

```csharp
public CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference CustomSmsSender { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference</a>

---

##### `InboundFederation`<sup>Required</sup> <a name="InboundFederation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.inboundFederation"></a>

```csharp
public CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference InboundFederation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference</a>

---

##### `PreTokenGenerationConfig`<sup>Required</sup> <a name="PreTokenGenerationConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationConfig"></a>

```csharp
public CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference PreTokenGenerationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference</a>

---

##### `CreateAuthChallengeInput`<sup>Optional</sup> <a name="CreateAuthChallengeInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.createAuthChallengeInput"></a>

```csharp
public string CreateAuthChallengeInput { get; }
```

- *Type:* string

---

##### `CustomEmailSenderInput`<sup>Optional</sup> <a name="CustomEmailSenderInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customEmailSenderInput"></a>

```csharp
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender CustomEmailSenderInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a>

---

##### `CustomMessageInput`<sup>Optional</sup> <a name="CustomMessageInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customMessageInput"></a>

```csharp
public string CustomMessageInput { get; }
```

- *Type:* string

---

##### `CustomSmsSenderInput`<sup>Optional</sup> <a name="CustomSmsSenderInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customSmsSenderInput"></a>

```csharp
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender CustomSmsSenderInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a>

---

##### `DefineAuthChallengeInput`<sup>Optional</sup> <a name="DefineAuthChallengeInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.defineAuthChallengeInput"></a>

```csharp
public string DefineAuthChallengeInput { get; }
```

- *Type:* string

---

##### `InboundFederationInput`<sup>Optional</sup> <a name="InboundFederationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.inboundFederationInput"></a>

```csharp
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation InboundFederationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a>

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `PostAuthenticationInput`<sup>Optional</sup> <a name="PostAuthenticationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postAuthenticationInput"></a>

```csharp
public string PostAuthenticationInput { get; }
```

- *Type:* string

---

##### `PostConfirmationInput`<sup>Optional</sup> <a name="PostConfirmationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postConfirmationInput"></a>

```csharp
public string PostConfirmationInput { get; }
```

- *Type:* string

---

##### `PreAuthenticationInput`<sup>Optional</sup> <a name="PreAuthenticationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preAuthenticationInput"></a>

```csharp
public string PreAuthenticationInput { get; }
```

- *Type:* string

---

##### `PreSignUpInput`<sup>Optional</sup> <a name="PreSignUpInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preSignUpInput"></a>

```csharp
public string PreSignUpInput { get; }
```

- *Type:* string

---

##### `PreTokenGenerationConfigInput`<sup>Optional</sup> <a name="PreTokenGenerationConfigInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationConfigInput"></a>

```csharp
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig PreTokenGenerationConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a>

---

##### `PreTokenGenerationInput`<sup>Optional</sup> <a name="PreTokenGenerationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationInput"></a>

```csharp
public string PreTokenGenerationInput { get; }
```

- *Type:* string

---

##### `UserMigrationInput`<sup>Optional</sup> <a name="UserMigrationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.userMigrationInput"></a>

```csharp
public string UserMigrationInput { get; }
```

- *Type:* string

---

##### `VerifyAuthChallengeResponseInput`<sup>Optional</sup> <a name="VerifyAuthChallengeResponseInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.verifyAuthChallengeResponseInput"></a>

```csharp
public string VerifyAuthChallengeResponseInput { get; }
```

- *Type:* string

---

##### `CreateAuthChallenge`<sup>Required</sup> <a name="CreateAuthChallenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.createAuthChallenge"></a>

```csharp
public string CreateAuthChallenge { get; }
```

- *Type:* string

---

##### `CustomMessage`<sup>Required</sup> <a name="CustomMessage" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customMessage"></a>

```csharp
public string CustomMessage { get; }
```

- *Type:* string

---

##### `DefineAuthChallenge`<sup>Required</sup> <a name="DefineAuthChallenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.defineAuthChallenge"></a>

```csharp
public string DefineAuthChallenge { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `PostAuthentication`<sup>Required</sup> <a name="PostAuthentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postAuthentication"></a>

```csharp
public string PostAuthentication { get; }
```

- *Type:* string

---

##### `PostConfirmation`<sup>Required</sup> <a name="PostConfirmation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postConfirmation"></a>

```csharp
public string PostConfirmation { get; }
```

- *Type:* string

---

##### `PreAuthentication`<sup>Required</sup> <a name="PreAuthentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preAuthentication"></a>

```csharp
public string PreAuthentication { get; }
```

- *Type:* string

---

##### `PreSignUp`<sup>Required</sup> <a name="PreSignUp" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preSignUp"></a>

```csharp
public string PreSignUp { get; }
```

- *Type:* string

---

##### `PreTokenGeneration`<sup>Required</sup> <a name="PreTokenGeneration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGeneration"></a>

```csharp
public string PreTokenGeneration { get; }
```

- *Type:* string

---

##### `UserMigration`<sup>Required</sup> <a name="UserMigration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.userMigration"></a>

```csharp
public string UserMigration { get; }
```

- *Type:* string

---

##### `VerifyAuthChallengeResponse`<sup>Required</sup> <a name="VerifyAuthChallengeResponse" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.verifyAuthChallengeResponse"></a>

```csharp
public string VerifyAuthChallengeResponse { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a>

---


### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resetLambdaArn">ResetLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resetLambdaVersion">ResetLambdaVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLambdaArn` <a name="ResetLambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resetLambdaArn"></a>

```csharp
private void ResetLambdaArn()
```

##### `ResetLambdaVersion` <a name="ResetLambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resetLambdaVersion"></a>

```csharp
private void ResetLambdaVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaArnInput">LambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaVersionInput">LambdaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaVersion">LambdaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LambdaArnInput`<sup>Optional</sup> <a name="LambdaArnInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaArnInput"></a>

```csharp
public string LambdaArnInput { get; }
```

- *Type:* string

---

##### `LambdaVersionInput`<sup>Optional</sup> <a name="LambdaVersionInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaVersionInput"></a>

```csharp
public string LambdaVersionInput { get; }
```

- *Type:* string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; }
```

- *Type:* string

---

##### `LambdaVersion`<sup>Required</sup> <a name="LambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaVersion"></a>

```csharp
public string LambdaVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a>

---


### CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetCallerArn">ResetCallerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetConfigurationSetName">ResetConfigurationSetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetInEntityId">ResetInEntityId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetInTemplateId">ResetInTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetOriginationIdentity">ResetOriginationIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCallerArn` <a name="ResetCallerArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetCallerArn"></a>

```csharp
private void ResetCallerArn()
```

##### `ResetConfigurationSetName` <a name="ResetConfigurationSetName" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetConfigurationSetName"></a>

```csharp
private void ResetConfigurationSetName()
```

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetExternalId"></a>

```csharp
private void ResetExternalId()
```

##### `ResetInEntityId` <a name="ResetInEntityId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetInEntityId"></a>

```csharp
private void ResetInEntityId()
```

##### `ResetInTemplateId` <a name="ResetInTemplateId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetInTemplateId"></a>

```csharp
private void ResetInTemplateId()
```

##### `ResetOriginationIdentity` <a name="ResetOriginationIdentity" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetOriginationIdentity"></a>

```csharp
private void ResetOriginationIdentity()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.callerArnInput">CallerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.configurationSetNameInput">ConfigurationSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inEntityIdInput">InEntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inTemplateIdInput">InTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.originationIdentityInput">OriginationIdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.callerArn">CallerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.configurationSetName">ConfigurationSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inEntityId">InEntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inTemplateId">InTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.originationIdentity">OriginationIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CallerArnInput`<sup>Optional</sup> <a name="CallerArnInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.callerArnInput"></a>

```csharp
public string CallerArnInput { get; }
```

- *Type:* string

---

##### `ConfigurationSetNameInput`<sup>Optional</sup> <a name="ConfigurationSetNameInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.configurationSetNameInput"></a>

```csharp
public string ConfigurationSetNameInput { get; }
```

- *Type:* string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `InEntityIdInput`<sup>Optional</sup> <a name="InEntityIdInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inEntityIdInput"></a>

```csharp
public string InEntityIdInput { get; }
```

- *Type:* string

---

##### `InTemplateIdInput`<sup>Optional</sup> <a name="InTemplateIdInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inTemplateIdInput"></a>

```csharp
public string InTemplateIdInput { get; }
```

- *Type:* string

---

##### `OriginationIdentityInput`<sup>Optional</sup> <a name="OriginationIdentityInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.originationIdentityInput"></a>

```csharp
public string OriginationIdentityInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `CallerArn`<sup>Required</sup> <a name="CallerArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.callerArn"></a>

```csharp
public string CallerArn { get; }
```

- *Type:* string

---

##### `ConfigurationSetName`<sup>Required</sup> <a name="ConfigurationSetName" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.configurationSetName"></a>

```csharp
public string ConfigurationSetName { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `InEntityId`<sup>Required</sup> <a name="InEntityId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inEntityId"></a>

```csharp
public string InEntityId { get; }
```

- *Type:* string

---

##### `InTemplateId`<sup>Required</sup> <a name="InTemplateId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inTemplateId"></a>

```csharp
public string InTemplateId { get; }
```

- *Type:* string

---

##### `OriginationIdentity`<sup>Required</sup> <a name="OriginationIdentity" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.originationIdentity"></a>

```csharp
public string OriginationIdentity { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a>

---


### CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.putEumsSms">PutEumsSms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetEumsSms">ResetEumsSms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetSnsCallerArn">ResetSnsCallerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetSnsRegion">ResetSnsRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEumsSms` <a name="PutEumsSms" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.putEumsSms"></a>

```csharp
private void PutEumsSms(CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.putEumsSms.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a>

---

##### `ResetEumsSms` <a name="ResetEumsSms" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetEumsSms"></a>

```csharp
private void ResetEumsSms()
```

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetExternalId"></a>

```csharp
private void ResetExternalId()
```

##### `ResetSnsCallerArn` <a name="ResetSnsCallerArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetSnsCallerArn"></a>

```csharp
private void ResetSnsCallerArn()
```

##### `ResetSnsRegion` <a name="ResetSnsRegion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetSnsRegion"></a>

```csharp
private void ResetSnsRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.eumsSms">EumsSms</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.eumsSmsInput">EumsSmsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsCallerArnInput">SnsCallerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsRegionInput">SnsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsCallerArn">SnsCallerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsRegion">SnsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EumsSms`<sup>Required</sup> <a name="EumsSms" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.eumsSms"></a>

```csharp
public CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference EumsSms { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference</a>

---

##### `EumsSmsInput`<sup>Optional</sup> <a name="EumsSmsInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.eumsSmsInput"></a>

```csharp
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms EumsSmsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a>

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `SnsCallerArnInput`<sup>Optional</sup> <a name="SnsCallerArnInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsCallerArnInput"></a>

```csharp
public string SnsCallerArnInput { get; }
```

- *Type:* string

---

##### `SnsRegionInput`<sup>Optional</sup> <a name="SnsRegionInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsRegionInput"></a>

```csharp
public string SnsRegionInput { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `SnsCallerArn`<sup>Required</sup> <a name="SnsCallerArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsCallerArn"></a>

```csharp
public string SnsCallerArn { get; }
```

- *Type:* string

---

##### `SnsRegion`<sup>Required</sup> <a name="SnsRegion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsRegion"></a>

```csharp
public string SnsRegion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a>

---



