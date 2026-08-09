# `cognitoUserPoolRiskConfigurationAttachment` Submodule <a name="`cognitoUserPoolRiskConfigurationAttachment` Submodule" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolRiskConfigurationAttachment <a name="CognitoUserPoolRiskConfigurationAttachment" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment awscc_cognito_user_pool_risk_configuration_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRiskConfigurationAttachment(Construct Scope, string Id, CognitoUserPoolRiskConfigurationAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig">CognitoUserPoolRiskConfigurationAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig">CognitoUserPoolRiskConfigurationAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.putAccountTakeoverRiskConfiguration">PutAccountTakeoverRiskConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.putCompromisedCredentialsRiskConfiguration">PutCompromisedCredentialsRiskConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.putRiskExceptionConfiguration">PutRiskExceptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.resetAccountTakeoverRiskConfiguration">ResetAccountTakeoverRiskConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.resetCompromisedCredentialsRiskConfiguration">ResetCompromisedCredentialsRiskConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.resetRiskExceptionConfiguration">ResetRiskExceptionConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccountTakeoverRiskConfiguration` <a name="PutAccountTakeoverRiskConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.putAccountTakeoverRiskConfiguration"></a>

```csharp
private void PutAccountTakeoverRiskConfiguration(CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.putAccountTakeoverRiskConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration</a>

---

##### `PutCompromisedCredentialsRiskConfiguration` <a name="PutCompromisedCredentialsRiskConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.putCompromisedCredentialsRiskConfiguration"></a>

```csharp
private void PutCompromisedCredentialsRiskConfiguration(CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.putCompromisedCredentialsRiskConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration</a>

---

##### `PutRiskExceptionConfiguration` <a name="PutRiskExceptionConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.putRiskExceptionConfiguration"></a>

```csharp
private void PutRiskExceptionConfiguration(CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.putRiskExceptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration">CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration</a>

---

##### `ResetAccountTakeoverRiskConfiguration` <a name="ResetAccountTakeoverRiskConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.resetAccountTakeoverRiskConfiguration"></a>

```csharp
private void ResetAccountTakeoverRiskConfiguration()
```

##### `ResetCompromisedCredentialsRiskConfiguration` <a name="ResetCompromisedCredentialsRiskConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.resetCompromisedCredentialsRiskConfiguration"></a>

```csharp
private void ResetCompromisedCredentialsRiskConfiguration()
```

##### `ResetRiskExceptionConfiguration` <a name="ResetRiskExceptionConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.resetRiskExceptionConfiguration"></a>

```csharp
private void ResetRiskExceptionConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoUserPoolRiskConfigurationAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoUserPoolRiskConfigurationAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoUserPoolRiskConfigurationAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoUserPoolRiskConfigurationAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoUserPoolRiskConfigurationAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CognitoUserPoolRiskConfigurationAttachment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitoUserPoolRiskConfigurationAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitoUserPoolRiskConfigurationAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CognitoUserPoolRiskConfigurationAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.accountTakeoverRiskConfiguration">AccountTakeoverRiskConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.compromisedCredentialsRiskConfiguration">CompromisedCredentialsRiskConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.riskExceptionConfiguration">RiskExceptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference">CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.accountTakeoverRiskConfigurationInput">AccountTakeoverRiskConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.compromisedCredentialsRiskConfigurationInput">CompromisedCredentialsRiskConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.riskExceptionConfigurationInput">RiskExceptionConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration">CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.userPoolId">UserPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountTakeoverRiskConfiguration`<sup>Required</sup> <a name="AccountTakeoverRiskConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.accountTakeoverRiskConfiguration"></a>

```csharp
public CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference AccountTakeoverRiskConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference</a>

---

##### `CompromisedCredentialsRiskConfiguration`<sup>Required</sup> <a name="CompromisedCredentialsRiskConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.compromisedCredentialsRiskConfiguration"></a>

```csharp
public CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference CompromisedCredentialsRiskConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RiskExceptionConfiguration`<sup>Required</sup> <a name="RiskExceptionConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.riskExceptionConfiguration"></a>

```csharp
public CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference RiskExceptionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference">CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference</a>

---

##### `AccountTakeoverRiskConfigurationInput`<sup>Optional</sup> <a name="AccountTakeoverRiskConfigurationInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.accountTakeoverRiskConfigurationInput"></a>

```csharp
public IResolvable|CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration AccountTakeoverRiskConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration</a>

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `CompromisedCredentialsRiskConfigurationInput`<sup>Optional</sup> <a name="CompromisedCredentialsRiskConfigurationInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.compromisedCredentialsRiskConfigurationInput"></a>

```csharp
public IResolvable|CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration CompromisedCredentialsRiskConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration</a>

---

##### `RiskExceptionConfigurationInput`<sup>Optional</sup> <a name="RiskExceptionConfigurationInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.riskExceptionConfigurationInput"></a>

```csharp
public IResolvable|CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration RiskExceptionConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration">CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration</a>

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.userPoolIdInput"></a>

```csharp
public string UserPoolIdInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.userPoolId"></a>

```csharp
public string UserPoolId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration {
    CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions Actions = null,
    CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration NotifyConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#actions CognitoUserPoolRiskConfigurationAttachment#actions}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration.property.notifyConfiguration">NotifyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#notify_configuration CognitoUserPoolRiskConfigurationAttachment#notify_configuration}. |

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration.property.actions"></a>

```csharp
public CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions Actions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#actions CognitoUserPoolRiskConfigurationAttachment#actions}.

---

##### `NotifyConfiguration`<sup>Optional</sup> <a name="NotifyConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration.property.notifyConfiguration"></a>

```csharp
public CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration NotifyConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#notify_configuration CognitoUserPoolRiskConfigurationAttachment#notify_configuration}.

---

### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions {
    CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction HighAction = null,
    CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction LowAction = null,
    CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction MediumAction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions.property.highAction">HighAction</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#high_action CognitoUserPoolRiskConfigurationAttachment#high_action}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions.property.lowAction">LowAction</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#low_action CognitoUserPoolRiskConfigurationAttachment#low_action}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions.property.mediumAction">MediumAction</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#medium_action CognitoUserPoolRiskConfigurationAttachment#medium_action}. |

---

##### `HighAction`<sup>Optional</sup> <a name="HighAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions.property.highAction"></a>

```csharp
public CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction HighAction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#high_action CognitoUserPoolRiskConfigurationAttachment#high_action}.

---

##### `LowAction`<sup>Optional</sup> <a name="LowAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions.property.lowAction"></a>

```csharp
public CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction LowAction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#low_action CognitoUserPoolRiskConfigurationAttachment#low_action}.

---

##### `MediumAction`<sup>Optional</sup> <a name="MediumAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions.property.mediumAction"></a>

```csharp
public CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction MediumAction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#medium_action CognitoUserPoolRiskConfigurationAttachment#medium_action}.

---

### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction {
    string EventAction = null,
    bool|IResolvable Notify = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction.property.eventAction">EventAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#event_action CognitoUserPoolRiskConfigurationAttachment#event_action}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction.property.notify">Notify</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#notify CognitoUserPoolRiskConfigurationAttachment#notify}. |

---

##### `EventAction`<sup>Optional</sup> <a name="EventAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction.property.eventAction"></a>

```csharp
public string EventAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#event_action CognitoUserPoolRiskConfigurationAttachment#event_action}.

---

##### `Notify`<sup>Optional</sup> <a name="Notify" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction.property.notify"></a>

```csharp
public bool|IResolvable Notify { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#notify CognitoUserPoolRiskConfigurationAttachment#notify}.

---

### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction {
    string EventAction = null,
    bool|IResolvable Notify = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction.property.eventAction">EventAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#event_action CognitoUserPoolRiskConfigurationAttachment#event_action}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction.property.notify">Notify</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#notify CognitoUserPoolRiskConfigurationAttachment#notify}. |

---

##### `EventAction`<sup>Optional</sup> <a name="EventAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction.property.eventAction"></a>

```csharp
public string EventAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#event_action CognitoUserPoolRiskConfigurationAttachment#event_action}.

---

##### `Notify`<sup>Optional</sup> <a name="Notify" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction.property.notify"></a>

```csharp
public bool|IResolvable Notify { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#notify CognitoUserPoolRiskConfigurationAttachment#notify}.

---

### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction {
    string EventAction = null,
    bool|IResolvable Notify = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction.property.eventAction">EventAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#event_action CognitoUserPoolRiskConfigurationAttachment#event_action}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction.property.notify">Notify</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#notify CognitoUserPoolRiskConfigurationAttachment#notify}. |

---

##### `EventAction`<sup>Optional</sup> <a name="EventAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction.property.eventAction"></a>

```csharp
public string EventAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#event_action CognitoUserPoolRiskConfigurationAttachment#event_action}.

---

##### `Notify`<sup>Optional</sup> <a name="Notify" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction.property.notify"></a>

```csharp
public bool|IResolvable Notify { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#notify CognitoUserPoolRiskConfigurationAttachment#notify}.

---

### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration {
    CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail BlockEmail = null,
    string From = null,
    CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail MfaEmail = null,
    CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail NoActionEmail = null,
    string ReplyTo = null,
    string SourceArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration.property.blockEmail">BlockEmail</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#block_email CognitoUserPoolRiskConfigurationAttachment#block_email}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration.property.from">From</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#from CognitoUserPoolRiskConfigurationAttachment#from}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration.property.mfaEmail">MfaEmail</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#mfa_email CognitoUserPoolRiskConfigurationAttachment#mfa_email}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration.property.noActionEmail">NoActionEmail</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#no_action_email CognitoUserPoolRiskConfigurationAttachment#no_action_email}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration.property.replyTo">ReplyTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#reply_to CognitoUserPoolRiskConfigurationAttachment#reply_to}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration.property.sourceArn">SourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#source_arn CognitoUserPoolRiskConfigurationAttachment#source_arn}. |

---

##### `BlockEmail`<sup>Optional</sup> <a name="BlockEmail" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration.property.blockEmail"></a>

```csharp
public CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail BlockEmail { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#block_email CognitoUserPoolRiskConfigurationAttachment#block_email}.

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#from CognitoUserPoolRiskConfigurationAttachment#from}.

---

##### `MfaEmail`<sup>Optional</sup> <a name="MfaEmail" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration.property.mfaEmail"></a>

```csharp
public CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail MfaEmail { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#mfa_email CognitoUserPoolRiskConfigurationAttachment#mfa_email}.

---

##### `NoActionEmail`<sup>Optional</sup> <a name="NoActionEmail" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration.property.noActionEmail"></a>

```csharp
public CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail NoActionEmail { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#no_action_email CognitoUserPoolRiskConfigurationAttachment#no_action_email}.

---

##### `ReplyTo`<sup>Optional</sup> <a name="ReplyTo" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration.property.replyTo"></a>

```csharp
public string ReplyTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#reply_to CognitoUserPoolRiskConfigurationAttachment#reply_to}.

---

##### `SourceArn`<sup>Optional</sup> <a name="SourceArn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration.property.sourceArn"></a>

```csharp
public string SourceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#source_arn CognitoUserPoolRiskConfigurationAttachment#source_arn}.

---

### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail {
    string HtmlBody = null,
    string Subject = null,
    string TextBody = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.property.htmlBody">HtmlBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#html_body CognitoUserPoolRiskConfigurationAttachment#html_body}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.property.subject">Subject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#subject CognitoUserPoolRiskConfigurationAttachment#subject}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.property.textBody">TextBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#text_body CognitoUserPoolRiskConfigurationAttachment#text_body}. |

---

##### `HtmlBody`<sup>Optional</sup> <a name="HtmlBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.property.htmlBody"></a>

```csharp
public string HtmlBody { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#html_body CognitoUserPoolRiskConfigurationAttachment#html_body}.

---

##### `Subject`<sup>Optional</sup> <a name="Subject" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.property.subject"></a>

```csharp
public string Subject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#subject CognitoUserPoolRiskConfigurationAttachment#subject}.

---

##### `TextBody`<sup>Optional</sup> <a name="TextBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.property.textBody"></a>

```csharp
public string TextBody { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#text_body CognitoUserPoolRiskConfigurationAttachment#text_body}.

---

### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail {
    string HtmlBody = null,
    string Subject = null,
    string TextBody = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.property.htmlBody">HtmlBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#html_body CognitoUserPoolRiskConfigurationAttachment#html_body}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.property.subject">Subject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#subject CognitoUserPoolRiskConfigurationAttachment#subject}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.property.textBody">TextBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#text_body CognitoUserPoolRiskConfigurationAttachment#text_body}. |

---

##### `HtmlBody`<sup>Optional</sup> <a name="HtmlBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.property.htmlBody"></a>

```csharp
public string HtmlBody { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#html_body CognitoUserPoolRiskConfigurationAttachment#html_body}.

---

##### `Subject`<sup>Optional</sup> <a name="Subject" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.property.subject"></a>

```csharp
public string Subject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#subject CognitoUserPoolRiskConfigurationAttachment#subject}.

---

##### `TextBody`<sup>Optional</sup> <a name="TextBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.property.textBody"></a>

```csharp
public string TextBody { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#text_body CognitoUserPoolRiskConfigurationAttachment#text_body}.

---

### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail {
    string HtmlBody = null,
    string Subject = null,
    string TextBody = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.property.htmlBody">HtmlBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#html_body CognitoUserPoolRiskConfigurationAttachment#html_body}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.property.subject">Subject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#subject CognitoUserPoolRiskConfigurationAttachment#subject}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.property.textBody">TextBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#text_body CognitoUserPoolRiskConfigurationAttachment#text_body}. |

---

##### `HtmlBody`<sup>Optional</sup> <a name="HtmlBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.property.htmlBody"></a>

```csharp
public string HtmlBody { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#html_body CognitoUserPoolRiskConfigurationAttachment#html_body}.

---

##### `Subject`<sup>Optional</sup> <a name="Subject" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.property.subject"></a>

```csharp
public string Subject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#subject CognitoUserPoolRiskConfigurationAttachment#subject}.

---

##### `TextBody`<sup>Optional</sup> <a name="TextBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.property.textBody"></a>

```csharp
public string TextBody { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#text_body CognitoUserPoolRiskConfigurationAttachment#text_body}.

---

### CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration <a name="CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration {
    CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions Actions = null,
    string[] EventFilter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#actions CognitoUserPoolRiskConfigurationAttachment#actions}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration.property.eventFilter">EventFilter</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#event_filter CognitoUserPoolRiskConfigurationAttachment#event_filter}. |

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration.property.actions"></a>

```csharp
public CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions Actions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#actions CognitoUserPoolRiskConfigurationAttachment#actions}.

---

##### `EventFilter`<sup>Optional</sup> <a name="EventFilter" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration.property.eventFilter"></a>

```csharp
public string[] EventFilter { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#event_filter CognitoUserPoolRiskConfigurationAttachment#event_filter}.

---

### CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions <a name="CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions {
    string EventAction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions.property.eventAction">EventAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#event_action CognitoUserPoolRiskConfigurationAttachment#event_action}. |

---

##### `EventAction`<sup>Optional</sup> <a name="EventAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions.property.eventAction"></a>

```csharp
public string EventAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#event_action CognitoUserPoolRiskConfigurationAttachment#event_action}.

---

### CognitoUserPoolRiskConfigurationAttachmentConfig <a name="CognitoUserPoolRiskConfigurationAttachmentConfig" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRiskConfigurationAttachmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ClientId,
    string UserPoolId,
    CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration AccountTakeoverRiskConfiguration = null,
    CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration CompromisedCredentialsRiskConfiguration = null,
    CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration RiskExceptionConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#client_id CognitoUserPoolRiskConfigurationAttachment#client_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.userPoolId">UserPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#user_pool_id CognitoUserPoolRiskConfigurationAttachment#user_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.accountTakeoverRiskConfiguration">AccountTakeoverRiskConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#account_takeover_risk_configuration CognitoUserPoolRiskConfigurationAttachment#account_takeover_risk_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.compromisedCredentialsRiskConfiguration">CompromisedCredentialsRiskConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#compromised_credentials_risk_configuration CognitoUserPoolRiskConfigurationAttachment#compromised_credentials_risk_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.riskExceptionConfiguration">RiskExceptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration">CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#risk_exception_configuration CognitoUserPoolRiskConfigurationAttachment#risk_exception_configuration}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#client_id CognitoUserPoolRiskConfigurationAttachment#client_id}.

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.userPoolId"></a>

```csharp
public string UserPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#user_pool_id CognitoUserPoolRiskConfigurationAttachment#user_pool_id}.

---

##### `AccountTakeoverRiskConfiguration`<sup>Optional</sup> <a name="AccountTakeoverRiskConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.accountTakeoverRiskConfiguration"></a>

```csharp
public CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration AccountTakeoverRiskConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#account_takeover_risk_configuration CognitoUserPoolRiskConfigurationAttachment#account_takeover_risk_configuration}.

---

##### `CompromisedCredentialsRiskConfiguration`<sup>Optional</sup> <a name="CompromisedCredentialsRiskConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.compromisedCredentialsRiskConfiguration"></a>

```csharp
public CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration CompromisedCredentialsRiskConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#compromised_credentials_risk_configuration CognitoUserPoolRiskConfigurationAttachment#compromised_credentials_risk_configuration}.

---

##### `RiskExceptionConfiguration`<sup>Optional</sup> <a name="RiskExceptionConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.riskExceptionConfiguration"></a>

```csharp
public CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration RiskExceptionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration">CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#risk_exception_configuration CognitoUserPoolRiskConfigurationAttachment#risk_exception_configuration}.

---

### CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration <a name="CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration {
    string[] BlockedIpRangeList = null,
    string[] SkippedIpRangeList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration.property.blockedIpRangeList">BlockedIpRangeList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#blocked_ip_range_list CognitoUserPoolRiskConfigurationAttachment#blocked_ip_range_list}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration.property.skippedIpRangeList">SkippedIpRangeList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#skipped_ip_range_list CognitoUserPoolRiskConfigurationAttachment#skipped_ip_range_list}. |

---

##### `BlockedIpRangeList`<sup>Optional</sup> <a name="BlockedIpRangeList" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration.property.blockedIpRangeList"></a>

```csharp
public string[] BlockedIpRangeList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#blocked_ip_range_list CognitoUserPoolRiskConfigurationAttachment#blocked_ip_range_list}.

---

##### `SkippedIpRangeList`<sup>Optional</sup> <a name="SkippedIpRangeList" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration.property.skippedIpRangeList"></a>

```csharp
public string[] SkippedIpRangeList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_user_pool_risk_configuration_attachment#skipped_ip_range_list CognitoUserPoolRiskConfigurationAttachment#skipped_ip_range_list}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.resetEventAction">ResetEventAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.resetNotify">ResetNotify</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventAction` <a name="ResetEventAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.resetEventAction"></a>

```csharp
private void ResetEventAction()
```

##### `ResetNotify` <a name="ResetNotify" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.resetNotify"></a>

```csharp
private void ResetNotify()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.eventActionInput">EventActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.notifyInput">NotifyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.eventAction">EventAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.notify">Notify</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventActionInput`<sup>Optional</sup> <a name="EventActionInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.eventActionInput"></a>

```csharp
public string EventActionInput { get; }
```

- *Type:* string

---

##### `NotifyInput`<sup>Optional</sup> <a name="NotifyInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.notifyInput"></a>

```csharp
public bool|IResolvable NotifyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventAction`<sup>Required</sup> <a name="EventAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.eventAction"></a>

```csharp
public string EventAction { get; }
```

- *Type:* string

---

##### `Notify`<sup>Required</sup> <a name="Notify" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.notify"></a>

```csharp
public bool|IResolvable Notify { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction</a>

---


### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.resetEventAction">ResetEventAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.resetNotify">ResetNotify</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventAction` <a name="ResetEventAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.resetEventAction"></a>

```csharp
private void ResetEventAction()
```

##### `ResetNotify` <a name="ResetNotify" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.resetNotify"></a>

```csharp
private void ResetNotify()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.eventActionInput">EventActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.notifyInput">NotifyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.eventAction">EventAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.notify">Notify</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventActionInput`<sup>Optional</sup> <a name="EventActionInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.eventActionInput"></a>

```csharp
public string EventActionInput { get; }
```

- *Type:* string

---

##### `NotifyInput`<sup>Optional</sup> <a name="NotifyInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.notifyInput"></a>

```csharp
public bool|IResolvable NotifyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventAction`<sup>Required</sup> <a name="EventAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.eventAction"></a>

```csharp
public string EventAction { get; }
```

- *Type:* string

---

##### `Notify`<sup>Required</sup> <a name="Notify" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.notify"></a>

```csharp
public bool|IResolvable Notify { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction</a>

---


### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.resetEventAction">ResetEventAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.resetNotify">ResetNotify</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventAction` <a name="ResetEventAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.resetEventAction"></a>

```csharp
private void ResetEventAction()
```

##### `ResetNotify` <a name="ResetNotify" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.resetNotify"></a>

```csharp
private void ResetNotify()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.eventActionInput">EventActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.notifyInput">NotifyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.eventAction">EventAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.notify">Notify</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventActionInput`<sup>Optional</sup> <a name="EventActionInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.eventActionInput"></a>

```csharp
public string EventActionInput { get; }
```

- *Type:* string

---

##### `NotifyInput`<sup>Optional</sup> <a name="NotifyInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.notifyInput"></a>

```csharp
public bool|IResolvable NotifyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventAction`<sup>Required</sup> <a name="EventAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.eventAction"></a>

```csharp
public string EventAction { get; }
```

- *Type:* string

---

##### `Notify`<sup>Required</sup> <a name="Notify" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.notify"></a>

```csharp
public bool|IResolvable Notify { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction</a>

---


### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.putHighAction">PutHighAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.putLowAction">PutLowAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.putMediumAction">PutMediumAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.resetHighAction">ResetHighAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.resetLowAction">ResetLowAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.resetMediumAction">ResetMediumAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHighAction` <a name="PutHighAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.putHighAction"></a>

```csharp
private void PutHighAction(CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.putHighAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction</a>

---

##### `PutLowAction` <a name="PutLowAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.putLowAction"></a>

```csharp
private void PutLowAction(CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.putLowAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction</a>

---

##### `PutMediumAction` <a name="PutMediumAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.putMediumAction"></a>

```csharp
private void PutMediumAction(CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.putMediumAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction</a>

---

##### `ResetHighAction` <a name="ResetHighAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.resetHighAction"></a>

```csharp
private void ResetHighAction()
```

##### `ResetLowAction` <a name="ResetLowAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.resetLowAction"></a>

```csharp
private void ResetLowAction()
```

##### `ResetMediumAction` <a name="ResetMediumAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.resetMediumAction"></a>

```csharp
private void ResetMediumAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.highAction">HighAction</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.lowAction">LowAction</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.mediumAction">MediumAction</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.highActionInput">HighActionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.lowActionInput">LowActionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.mediumActionInput">MediumActionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HighAction`<sup>Required</sup> <a name="HighAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.highAction"></a>

```csharp
public CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference HighAction { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference</a>

---

##### `LowAction`<sup>Required</sup> <a name="LowAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.lowAction"></a>

```csharp
public CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference LowAction { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference</a>

---

##### `MediumAction`<sup>Required</sup> <a name="MediumAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.mediumAction"></a>

```csharp
public CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference MediumAction { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference</a>

---

##### `HighActionInput`<sup>Optional</sup> <a name="HighActionInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.highActionInput"></a>

```csharp
public IResolvable|CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction HighActionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction</a>

---

##### `LowActionInput`<sup>Optional</sup> <a name="LowActionInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.lowActionInput"></a>

```csharp
public IResolvable|CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction LowActionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction</a>

---

##### `MediumActionInput`<sup>Optional</sup> <a name="MediumActionInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.mediumActionInput"></a>

```csharp
public IResolvable|CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction MediumActionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions</a>

---


### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.resetHtmlBody">ResetHtmlBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.resetSubject">ResetSubject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.resetTextBody">ResetTextBody</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHtmlBody` <a name="ResetHtmlBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.resetHtmlBody"></a>

```csharp
private void ResetHtmlBody()
```

##### `ResetSubject` <a name="ResetSubject" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.resetSubject"></a>

```csharp
private void ResetSubject()
```

##### `ResetTextBody` <a name="ResetTextBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.resetTextBody"></a>

```csharp
private void ResetTextBody()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.htmlBodyInput">HtmlBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.subjectInput">SubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.textBodyInput">TextBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.htmlBody">HtmlBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.textBody">TextBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HtmlBodyInput`<sup>Optional</sup> <a name="HtmlBodyInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.htmlBodyInput"></a>

```csharp
public string HtmlBodyInput { get; }
```

- *Type:* string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.subjectInput"></a>

```csharp
public string SubjectInput { get; }
```

- *Type:* string

---

##### `TextBodyInput`<sup>Optional</sup> <a name="TextBodyInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.textBodyInput"></a>

```csharp
public string TextBodyInput { get; }
```

- *Type:* string

---

##### `HtmlBody`<sup>Required</sup> <a name="HtmlBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.htmlBody"></a>

```csharp
public string HtmlBody { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `TextBody`<sup>Required</sup> <a name="TextBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.textBody"></a>

```csharp
public string TextBody { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a>

---


### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.resetHtmlBody">ResetHtmlBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.resetSubject">ResetSubject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.resetTextBody">ResetTextBody</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHtmlBody` <a name="ResetHtmlBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.resetHtmlBody"></a>

```csharp
private void ResetHtmlBody()
```

##### `ResetSubject` <a name="ResetSubject" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.resetSubject"></a>

```csharp
private void ResetSubject()
```

##### `ResetTextBody` <a name="ResetTextBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.resetTextBody"></a>

```csharp
private void ResetTextBody()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.htmlBodyInput">HtmlBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.subjectInput">SubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.textBodyInput">TextBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.htmlBody">HtmlBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.textBody">TextBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HtmlBodyInput`<sup>Optional</sup> <a name="HtmlBodyInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.htmlBodyInput"></a>

```csharp
public string HtmlBodyInput { get; }
```

- *Type:* string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.subjectInput"></a>

```csharp
public string SubjectInput { get; }
```

- *Type:* string

---

##### `TextBodyInput`<sup>Optional</sup> <a name="TextBodyInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.textBodyInput"></a>

```csharp
public string TextBodyInput { get; }
```

- *Type:* string

---

##### `HtmlBody`<sup>Required</sup> <a name="HtmlBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.htmlBody"></a>

```csharp
public string HtmlBody { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `TextBody`<sup>Required</sup> <a name="TextBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.textBody"></a>

```csharp
public string TextBody { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a>

---


### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.resetHtmlBody">ResetHtmlBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.resetSubject">ResetSubject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.resetTextBody">ResetTextBody</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHtmlBody` <a name="ResetHtmlBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.resetHtmlBody"></a>

```csharp
private void ResetHtmlBody()
```

##### `ResetSubject` <a name="ResetSubject" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.resetSubject"></a>

```csharp
private void ResetSubject()
```

##### `ResetTextBody` <a name="ResetTextBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.resetTextBody"></a>

```csharp
private void ResetTextBody()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.htmlBodyInput">HtmlBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.subjectInput">SubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.textBodyInput">TextBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.htmlBody">HtmlBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.textBody">TextBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HtmlBodyInput`<sup>Optional</sup> <a name="HtmlBodyInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.htmlBodyInput"></a>

```csharp
public string HtmlBodyInput { get; }
```

- *Type:* string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.subjectInput"></a>

```csharp
public string SubjectInput { get; }
```

- *Type:* string

---

##### `TextBodyInput`<sup>Optional</sup> <a name="TextBodyInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.textBodyInput"></a>

```csharp
public string TextBodyInput { get; }
```

- *Type:* string

---

##### `HtmlBody`<sup>Required</sup> <a name="HtmlBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.htmlBody"></a>

```csharp
public string HtmlBody { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `TextBody`<sup>Required</sup> <a name="TextBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.textBody"></a>

```csharp
public string TextBody { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a>

---


### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putBlockEmail">PutBlockEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putMfaEmail">PutMfaEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putNoActionEmail">PutNoActionEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetBlockEmail">ResetBlockEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetMfaEmail">ResetMfaEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetNoActionEmail">ResetNoActionEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetReplyTo">ResetReplyTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetSourceArn">ResetSourceArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBlockEmail` <a name="PutBlockEmail" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putBlockEmail"></a>

```csharp
private void PutBlockEmail(CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putBlockEmail.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a>

---

##### `PutMfaEmail` <a name="PutMfaEmail" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putMfaEmail"></a>

```csharp
private void PutMfaEmail(CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putMfaEmail.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a>

---

##### `PutNoActionEmail` <a name="PutNoActionEmail" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putNoActionEmail"></a>

```csharp
private void PutNoActionEmail(CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putNoActionEmail.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a>

---

##### `ResetBlockEmail` <a name="ResetBlockEmail" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetBlockEmail"></a>

```csharp
private void ResetBlockEmail()
```

##### `ResetFrom` <a name="ResetFrom" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetFrom"></a>

```csharp
private void ResetFrom()
```

##### `ResetMfaEmail` <a name="ResetMfaEmail" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetMfaEmail"></a>

```csharp
private void ResetMfaEmail()
```

##### `ResetNoActionEmail` <a name="ResetNoActionEmail" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetNoActionEmail"></a>

```csharp
private void ResetNoActionEmail()
```

##### `ResetReplyTo` <a name="ResetReplyTo" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetReplyTo"></a>

```csharp
private void ResetReplyTo()
```

##### `ResetSourceArn` <a name="ResetSourceArn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetSourceArn"></a>

```csharp
private void ResetSourceArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.blockEmail">BlockEmail</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.mfaEmail">MfaEmail</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.noActionEmail">NoActionEmail</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.blockEmailInput">BlockEmailInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.mfaEmailInput">MfaEmailInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.noActionEmailInput">NoActionEmailInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.replyToInput">ReplyToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.sourceArnInput">SourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.replyTo">ReplyTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.sourceArn">SourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockEmail`<sup>Required</sup> <a name="BlockEmail" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.blockEmail"></a>

```csharp
public CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference BlockEmail { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference</a>

---

##### `MfaEmail`<sup>Required</sup> <a name="MfaEmail" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.mfaEmail"></a>

```csharp
public CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference MfaEmail { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference</a>

---

##### `NoActionEmail`<sup>Required</sup> <a name="NoActionEmail" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.noActionEmail"></a>

```csharp
public CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference NoActionEmail { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference</a>

---

##### `BlockEmailInput`<sup>Optional</sup> <a name="BlockEmailInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.blockEmailInput"></a>

```csharp
public IResolvable|CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail BlockEmailInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a>

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `MfaEmailInput`<sup>Optional</sup> <a name="MfaEmailInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.mfaEmailInput"></a>

```csharp
public IResolvable|CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail MfaEmailInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a>

---

##### `NoActionEmailInput`<sup>Optional</sup> <a name="NoActionEmailInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.noActionEmailInput"></a>

```csharp
public IResolvable|CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail NoActionEmailInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a>

---

##### `ReplyToInput`<sup>Optional</sup> <a name="ReplyToInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.replyToInput"></a>

```csharp
public string ReplyToInput { get; }
```

- *Type:* string

---

##### `SourceArnInput`<sup>Optional</sup> <a name="SourceArnInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.sourceArnInput"></a>

```csharp
public string SourceArnInput { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `ReplyTo`<sup>Required</sup> <a name="ReplyTo" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.replyTo"></a>

```csharp
public string ReplyTo { get; }
```

- *Type:* string

---

##### `SourceArn`<sup>Required</sup> <a name="SourceArn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.sourceArn"></a>

```csharp
public string SourceArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration</a>

---


### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.putNotifyConfiguration">PutNotifyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.resetNotifyConfiguration">ResetNotifyConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActions` <a name="PutActions" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.putActions"></a>

```csharp
private void PutActions(CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions</a>

---

##### `PutNotifyConfiguration` <a name="PutNotifyConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.putNotifyConfiguration"></a>

```csharp
private void PutNotifyConfiguration(CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.putNotifyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration</a>

---

##### `ResetActions` <a name="ResetActions" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.resetActions"></a>

```csharp
private void ResetActions()
```

##### `ResetNotifyConfiguration` <a name="ResetNotifyConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.resetNotifyConfiguration"></a>

```csharp
private void ResetNotifyConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.notifyConfiguration">NotifyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.actionsInput">ActionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.notifyConfigurationInput">NotifyConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.actions"></a>

```csharp
public CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference Actions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference</a>

---

##### `NotifyConfiguration`<sup>Required</sup> <a name="NotifyConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.notifyConfiguration"></a>

```csharp
public CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference NotifyConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.actionsInput"></a>

```csharp
public IResolvable|CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions ActionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions</a>

---

##### `NotifyConfigurationInput`<sup>Optional</sup> <a name="NotifyConfigurationInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.notifyConfigurationInput"></a>

```csharp
public IResolvable|CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration NotifyConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration</a>

---


### CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference <a name="CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.resetEventAction">ResetEventAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventAction` <a name="ResetEventAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.resetEventAction"></a>

```csharp
private void ResetEventAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.property.eventActionInput">EventActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.property.eventAction">EventAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventActionInput`<sup>Optional</sup> <a name="EventActionInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.property.eventActionInput"></a>

```csharp
public string EventActionInput { get; }
```

- *Type:* string

---

##### `EventAction`<sup>Required</sup> <a name="EventAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.property.eventAction"></a>

```csharp
public string EventAction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions</a>

---


### CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference <a name="CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.resetEventFilter">ResetEventFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActions` <a name="PutActions" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.putActions"></a>

```csharp
private void PutActions(CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions</a>

---

##### `ResetActions` <a name="ResetActions" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.resetActions"></a>

```csharp
private void ResetActions()
```

##### `ResetEventFilter` <a name="ResetEventFilter" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.resetEventFilter"></a>

```csharp
private void ResetEventFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.actionsInput">ActionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.eventFilterInput">EventFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.eventFilter">EventFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.actions"></a>

```csharp
public CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference Actions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.actionsInput"></a>

```csharp
public IResolvable|CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions ActionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions</a>

---

##### `EventFilterInput`<sup>Optional</sup> <a name="EventFilterInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.eventFilterInput"></a>

```csharp
public string[] EventFilterInput { get; }
```

- *Type:* string[]

---

##### `EventFilter`<sup>Required</sup> <a name="EventFilter" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.eventFilter"></a>

```csharp
public string[] EventFilter { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration</a>

---


### CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference <a name="CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.resetBlockedIpRangeList">ResetBlockedIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.resetSkippedIpRangeList">ResetSkippedIpRangeList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBlockedIpRangeList` <a name="ResetBlockedIpRangeList" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.resetBlockedIpRangeList"></a>

```csharp
private void ResetBlockedIpRangeList()
```

##### `ResetSkippedIpRangeList` <a name="ResetSkippedIpRangeList" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.resetSkippedIpRangeList"></a>

```csharp
private void ResetSkippedIpRangeList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.blockedIpRangeListInput">BlockedIpRangeListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.skippedIpRangeListInput">SkippedIpRangeListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.blockedIpRangeList">BlockedIpRangeList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.skippedIpRangeList">SkippedIpRangeList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration">CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockedIpRangeListInput`<sup>Optional</sup> <a name="BlockedIpRangeListInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.blockedIpRangeListInput"></a>

```csharp
public string[] BlockedIpRangeListInput { get; }
```

- *Type:* string[]

---

##### `SkippedIpRangeListInput`<sup>Optional</sup> <a name="SkippedIpRangeListInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.skippedIpRangeListInput"></a>

```csharp
public string[] SkippedIpRangeListInput { get; }
```

- *Type:* string[]

---

##### `BlockedIpRangeList`<sup>Required</sup> <a name="BlockedIpRangeList" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.blockedIpRangeList"></a>

```csharp
public string[] BlockedIpRangeList { get; }
```

- *Type:* string[]

---

##### `SkippedIpRangeList`<sup>Required</sup> <a name="SkippedIpRangeList" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.skippedIpRangeList"></a>

```csharp
public string[] SkippedIpRangeList { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration">CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration</a>

---



