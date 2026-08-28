# `cognitoUserPoolClient` Submodule <a name="`cognitoUserPoolClient` Submodule" id="@cdktn/provider-awscc.cognitoUserPoolClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolClient <a name="CognitoUserPoolClient" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client awscc_cognito_user_pool_client}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolClient(Construct Scope, string Id, CognitoUserPoolClientConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig">CognitoUserPoolClientConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig">CognitoUserPoolClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.putAnalyticsConfiguration">PutAnalyticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.putRefreshTokenRotation">PutRefreshTokenRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.putTokenValidityUnits">PutTokenValidityUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetAccessTokenValidity">ResetAccessTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOAuthFlows">ResetAllowedOAuthFlows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOAuthFlowsUserPoolClient">ResetAllowedOAuthFlowsUserPoolClient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOAuthScopes">ResetAllowedOAuthScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetAnalyticsConfiguration">ResetAnalyticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetAuthSessionValidity">ResetAuthSessionValidity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetCallbackUrLs">ResetCallbackUrLs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetClientName">ResetClientName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetDefaultRedirectUri">ResetDefaultRedirectUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetEnablePropagateAdditionalUserContextData">ResetEnablePropagateAdditionalUserContextData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetEnableTokenRevocation">ResetEnableTokenRevocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetExplicitAuthFlows">ResetExplicitAuthFlows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetGenerateSecret">ResetGenerateSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetIdTokenValidity">ResetIdTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetLogoutUrLs">ResetLogoutUrLs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetPreventUserExistenceErrors">ResetPreventUserExistenceErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetReadAttributes">ResetReadAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetRefreshTokenRotation">ResetRefreshTokenRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetRefreshTokenValidity">ResetRefreshTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetSupportedIdentityProviders">ResetSupportedIdentityProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetTokenValidityUnits">ResetTokenValidityUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetWriteAttributes">ResetWriteAttributes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAnalyticsConfiguration` <a name="PutAnalyticsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.putAnalyticsConfiguration"></a>

```csharp
private void PutAnalyticsConfiguration(CognitoUserPoolClientAnalyticsConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.putAnalyticsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a>

---

##### `PutRefreshTokenRotation` <a name="PutRefreshTokenRotation" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.putRefreshTokenRotation"></a>

```csharp
private void PutRefreshTokenRotation(CognitoUserPoolClientRefreshTokenRotation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.putRefreshTokenRotation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation">CognitoUserPoolClientRefreshTokenRotation</a>

---

##### `PutTokenValidityUnits` <a name="PutTokenValidityUnits" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.putTokenValidityUnits"></a>

```csharp
private void PutTokenValidityUnits(CognitoUserPoolClientTokenValidityUnits Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.putTokenValidityUnits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a>

---

##### `ResetAccessTokenValidity` <a name="ResetAccessTokenValidity" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetAccessTokenValidity"></a>

```csharp
private void ResetAccessTokenValidity()
```

##### `ResetAllowedOAuthFlows` <a name="ResetAllowedOAuthFlows" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOAuthFlows"></a>

```csharp
private void ResetAllowedOAuthFlows()
```

##### `ResetAllowedOAuthFlowsUserPoolClient` <a name="ResetAllowedOAuthFlowsUserPoolClient" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOAuthFlowsUserPoolClient"></a>

```csharp
private void ResetAllowedOAuthFlowsUserPoolClient()
```

##### `ResetAllowedOAuthScopes` <a name="ResetAllowedOAuthScopes" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOAuthScopes"></a>

```csharp
private void ResetAllowedOAuthScopes()
```

##### `ResetAnalyticsConfiguration` <a name="ResetAnalyticsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetAnalyticsConfiguration"></a>

```csharp
private void ResetAnalyticsConfiguration()
```

##### `ResetAuthSessionValidity` <a name="ResetAuthSessionValidity" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetAuthSessionValidity"></a>

```csharp
private void ResetAuthSessionValidity()
```

##### `ResetCallbackUrLs` <a name="ResetCallbackUrLs" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetCallbackUrLs"></a>

```csharp
private void ResetCallbackUrLs()
```

##### `ResetClientName` <a name="ResetClientName" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetClientName"></a>

```csharp
private void ResetClientName()
```

##### `ResetDefaultRedirectUri` <a name="ResetDefaultRedirectUri" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetDefaultRedirectUri"></a>

```csharp
private void ResetDefaultRedirectUri()
```

##### `ResetEnablePropagateAdditionalUserContextData` <a name="ResetEnablePropagateAdditionalUserContextData" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetEnablePropagateAdditionalUserContextData"></a>

```csharp
private void ResetEnablePropagateAdditionalUserContextData()
```

##### `ResetEnableTokenRevocation` <a name="ResetEnableTokenRevocation" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetEnableTokenRevocation"></a>

```csharp
private void ResetEnableTokenRevocation()
```

##### `ResetExplicitAuthFlows` <a name="ResetExplicitAuthFlows" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetExplicitAuthFlows"></a>

```csharp
private void ResetExplicitAuthFlows()
```

##### `ResetGenerateSecret` <a name="ResetGenerateSecret" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetGenerateSecret"></a>

```csharp
private void ResetGenerateSecret()
```

##### `ResetIdTokenValidity` <a name="ResetIdTokenValidity" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetIdTokenValidity"></a>

```csharp
private void ResetIdTokenValidity()
```

##### `ResetLogoutUrLs` <a name="ResetLogoutUrLs" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetLogoutUrLs"></a>

```csharp
private void ResetLogoutUrLs()
```

##### `ResetPreventUserExistenceErrors` <a name="ResetPreventUserExistenceErrors" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetPreventUserExistenceErrors"></a>

```csharp
private void ResetPreventUserExistenceErrors()
```

##### `ResetReadAttributes` <a name="ResetReadAttributes" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetReadAttributes"></a>

```csharp
private void ResetReadAttributes()
```

##### `ResetRefreshTokenRotation` <a name="ResetRefreshTokenRotation" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetRefreshTokenRotation"></a>

```csharp
private void ResetRefreshTokenRotation()
```

##### `ResetRefreshTokenValidity` <a name="ResetRefreshTokenValidity" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetRefreshTokenValidity"></a>

```csharp
private void ResetRefreshTokenValidity()
```

##### `ResetSupportedIdentityProviders` <a name="ResetSupportedIdentityProviders" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetSupportedIdentityProviders"></a>

```csharp
private void ResetSupportedIdentityProviders()
```

##### `ResetTokenValidityUnits` <a name="ResetTokenValidityUnits" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetTokenValidityUnits"></a>

```csharp
private void ResetTokenValidityUnits()
```

##### `ResetWriteAttributes` <a name="ResetWriteAttributes" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetWriteAttributes"></a>

```csharp
private void ResetWriteAttributes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoUserPoolClient resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoUserPoolClient.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoUserPoolClient.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoUserPoolClient.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoUserPoolClient.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CognitoUserPoolClient resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitoUserPoolClient to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitoUserPoolClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CognitoUserPoolClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.analyticsConfiguration">AnalyticsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference">CognitoUserPoolClientAnalyticsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenRotation">RefreshTokenRotation</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference">CognitoUserPoolClientRefreshTokenRotationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.tokenValidityUnits">TokenValidityUnits</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference">CognitoUserPoolClientTokenValidityUnitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.accessTokenValidityInput">AccessTokenValidityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOAuthFlowsInput">AllowedOAuthFlowsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOAuthFlowsUserPoolClientInput">AllowedOAuthFlowsUserPoolClientInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOAuthScopesInput">AllowedOAuthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.analyticsConfigurationInput">AnalyticsConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.authSessionValidityInput">AuthSessionValidityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.callbackUrLsInput">CallbackUrLsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.clientNameInput">ClientNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.defaultRedirectUriInput">DefaultRedirectUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.enablePropagateAdditionalUserContextDataInput">EnablePropagateAdditionalUserContextDataInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.enableTokenRevocationInput">EnableTokenRevocationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.explicitAuthFlowsInput">ExplicitAuthFlowsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.generateSecretInput">GenerateSecretInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.idTokenValidityInput">IdTokenValidityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.logoutUrLsInput">LogoutUrLsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.preventUserExistenceErrorsInput">PreventUserExistenceErrorsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.readAttributesInput">ReadAttributesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenRotationInput">RefreshTokenRotationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation">CognitoUserPoolClientRefreshTokenRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenValidityInput">RefreshTokenValidityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.supportedIdentityProvidersInput">SupportedIdentityProvidersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.tokenValidityUnitsInput">TokenValidityUnitsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.writeAttributesInput">WriteAttributesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.accessTokenValidity">AccessTokenValidity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOAuthFlows">AllowedOAuthFlows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOAuthFlowsUserPoolClient">AllowedOAuthFlowsUserPoolClient</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOAuthScopes">AllowedOAuthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.authSessionValidity">AuthSessionValidity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.callbackUrLs">CallbackUrLs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.clientName">ClientName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.defaultRedirectUri">DefaultRedirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.enablePropagateAdditionalUserContextData">EnablePropagateAdditionalUserContextData</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.enableTokenRevocation">EnableTokenRevocation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.explicitAuthFlows">ExplicitAuthFlows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.generateSecret">GenerateSecret</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.idTokenValidity">IdTokenValidity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.logoutUrLs">LogoutUrLs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.preventUserExistenceErrors">PreventUserExistenceErrors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.readAttributes">ReadAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenValidity">RefreshTokenValidity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.supportedIdentityProviders">SupportedIdentityProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.userPoolId">UserPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.writeAttributes">WriteAttributes</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AnalyticsConfiguration`<sup>Required</sup> <a name="AnalyticsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.analyticsConfiguration"></a>

```csharp
public CognitoUserPoolClientAnalyticsConfigurationOutputReference AnalyticsConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference">CognitoUserPoolClientAnalyticsConfigurationOutputReference</a>

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RefreshTokenRotation`<sup>Required</sup> <a name="RefreshTokenRotation" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenRotation"></a>

```csharp
public CognitoUserPoolClientRefreshTokenRotationOutputReference RefreshTokenRotation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference">CognitoUserPoolClientRefreshTokenRotationOutputReference</a>

---

##### `TokenValidityUnits`<sup>Required</sup> <a name="TokenValidityUnits" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.tokenValidityUnits"></a>

```csharp
public CognitoUserPoolClientTokenValidityUnitsOutputReference TokenValidityUnits { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference">CognitoUserPoolClientTokenValidityUnitsOutputReference</a>

---

##### `AccessTokenValidityInput`<sup>Optional</sup> <a name="AccessTokenValidityInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.accessTokenValidityInput"></a>

```csharp
public double AccessTokenValidityInput { get; }
```

- *Type:* double

---

##### `AllowedOAuthFlowsInput`<sup>Optional</sup> <a name="AllowedOAuthFlowsInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOAuthFlowsInput"></a>

```csharp
public string[] AllowedOAuthFlowsInput { get; }
```

- *Type:* string[]

---

##### `AllowedOAuthFlowsUserPoolClientInput`<sup>Optional</sup> <a name="AllowedOAuthFlowsUserPoolClientInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOAuthFlowsUserPoolClientInput"></a>

```csharp
public bool|IResolvable AllowedOAuthFlowsUserPoolClientInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowedOAuthScopesInput`<sup>Optional</sup> <a name="AllowedOAuthScopesInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOAuthScopesInput"></a>

```csharp
public string[] AllowedOAuthScopesInput { get; }
```

- *Type:* string[]

---

##### `AnalyticsConfigurationInput`<sup>Optional</sup> <a name="AnalyticsConfigurationInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.analyticsConfigurationInput"></a>

```csharp
public IResolvable|CognitoUserPoolClientAnalyticsConfiguration AnalyticsConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a>

---

##### `AuthSessionValidityInput`<sup>Optional</sup> <a name="AuthSessionValidityInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.authSessionValidityInput"></a>

```csharp
public double AuthSessionValidityInput { get; }
```

- *Type:* double

---

##### `CallbackUrLsInput`<sup>Optional</sup> <a name="CallbackUrLsInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.callbackUrLsInput"></a>

```csharp
public string[] CallbackUrLsInput { get; }
```

- *Type:* string[]

---

##### `ClientNameInput`<sup>Optional</sup> <a name="ClientNameInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.clientNameInput"></a>

```csharp
public string ClientNameInput { get; }
```

- *Type:* string

---

##### `DefaultRedirectUriInput`<sup>Optional</sup> <a name="DefaultRedirectUriInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.defaultRedirectUriInput"></a>

```csharp
public string DefaultRedirectUriInput { get; }
```

- *Type:* string

---

##### `EnablePropagateAdditionalUserContextDataInput`<sup>Optional</sup> <a name="EnablePropagateAdditionalUserContextDataInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.enablePropagateAdditionalUserContextDataInput"></a>

```csharp
public bool|IResolvable EnablePropagateAdditionalUserContextDataInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableTokenRevocationInput`<sup>Optional</sup> <a name="EnableTokenRevocationInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.enableTokenRevocationInput"></a>

```csharp
public bool|IResolvable EnableTokenRevocationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExplicitAuthFlowsInput`<sup>Optional</sup> <a name="ExplicitAuthFlowsInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.explicitAuthFlowsInput"></a>

```csharp
public string[] ExplicitAuthFlowsInput { get; }
```

- *Type:* string[]

---

##### `GenerateSecretInput`<sup>Optional</sup> <a name="GenerateSecretInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.generateSecretInput"></a>

```csharp
public bool|IResolvable GenerateSecretInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdTokenValidityInput`<sup>Optional</sup> <a name="IdTokenValidityInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.idTokenValidityInput"></a>

```csharp
public double IdTokenValidityInput { get; }
```

- *Type:* double

---

##### `LogoutUrLsInput`<sup>Optional</sup> <a name="LogoutUrLsInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.logoutUrLsInput"></a>

```csharp
public string[] LogoutUrLsInput { get; }
```

- *Type:* string[]

---

##### `PreventUserExistenceErrorsInput`<sup>Optional</sup> <a name="PreventUserExistenceErrorsInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.preventUserExistenceErrorsInput"></a>

```csharp
public string PreventUserExistenceErrorsInput { get; }
```

- *Type:* string

---

##### `ReadAttributesInput`<sup>Optional</sup> <a name="ReadAttributesInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.readAttributesInput"></a>

```csharp
public string[] ReadAttributesInput { get; }
```

- *Type:* string[]

---

##### `RefreshTokenRotationInput`<sup>Optional</sup> <a name="RefreshTokenRotationInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenRotationInput"></a>

```csharp
public IResolvable|CognitoUserPoolClientRefreshTokenRotation RefreshTokenRotationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation">CognitoUserPoolClientRefreshTokenRotation</a>

---

##### `RefreshTokenValidityInput`<sup>Optional</sup> <a name="RefreshTokenValidityInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenValidityInput"></a>

```csharp
public double RefreshTokenValidityInput { get; }
```

- *Type:* double

---

##### `SupportedIdentityProvidersInput`<sup>Optional</sup> <a name="SupportedIdentityProvidersInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.supportedIdentityProvidersInput"></a>

```csharp
public string[] SupportedIdentityProvidersInput { get; }
```

- *Type:* string[]

---

##### `TokenValidityUnitsInput`<sup>Optional</sup> <a name="TokenValidityUnitsInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.tokenValidityUnitsInput"></a>

```csharp
public IResolvable|CognitoUserPoolClientTokenValidityUnits TokenValidityUnitsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a>

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.userPoolIdInput"></a>

```csharp
public string UserPoolIdInput { get; }
```

- *Type:* string

---

##### `WriteAttributesInput`<sup>Optional</sup> <a name="WriteAttributesInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.writeAttributesInput"></a>

```csharp
public string[] WriteAttributesInput { get; }
```

- *Type:* string[]

---

##### `AccessTokenValidity`<sup>Required</sup> <a name="AccessTokenValidity" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.accessTokenValidity"></a>

```csharp
public double AccessTokenValidity { get; }
```

- *Type:* double

---

##### `AllowedOAuthFlows`<sup>Required</sup> <a name="AllowedOAuthFlows" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOAuthFlows"></a>

```csharp
public string[] AllowedOAuthFlows { get; }
```

- *Type:* string[]

---

##### `AllowedOAuthFlowsUserPoolClient`<sup>Required</sup> <a name="AllowedOAuthFlowsUserPoolClient" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOAuthFlowsUserPoolClient"></a>

```csharp
public bool|IResolvable AllowedOAuthFlowsUserPoolClient { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowedOAuthScopes`<sup>Required</sup> <a name="AllowedOAuthScopes" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOAuthScopes"></a>

```csharp
public string[] AllowedOAuthScopes { get; }
```

- *Type:* string[]

---

##### `AuthSessionValidity`<sup>Required</sup> <a name="AuthSessionValidity" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.authSessionValidity"></a>

```csharp
public double AuthSessionValidity { get; }
```

- *Type:* double

---

##### `CallbackUrLs`<sup>Required</sup> <a name="CallbackUrLs" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.callbackUrLs"></a>

```csharp
public string[] CallbackUrLs { get; }
```

- *Type:* string[]

---

##### `ClientName`<sup>Required</sup> <a name="ClientName" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.clientName"></a>

```csharp
public string ClientName { get; }
```

- *Type:* string

---

##### `DefaultRedirectUri`<sup>Required</sup> <a name="DefaultRedirectUri" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.defaultRedirectUri"></a>

```csharp
public string DefaultRedirectUri { get; }
```

- *Type:* string

---

##### `EnablePropagateAdditionalUserContextData`<sup>Required</sup> <a name="EnablePropagateAdditionalUserContextData" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.enablePropagateAdditionalUserContextData"></a>

```csharp
public bool|IResolvable EnablePropagateAdditionalUserContextData { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableTokenRevocation`<sup>Required</sup> <a name="EnableTokenRevocation" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.enableTokenRevocation"></a>

```csharp
public bool|IResolvable EnableTokenRevocation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExplicitAuthFlows`<sup>Required</sup> <a name="ExplicitAuthFlows" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.explicitAuthFlows"></a>

```csharp
public string[] ExplicitAuthFlows { get; }
```

- *Type:* string[]

---

##### `GenerateSecret`<sup>Required</sup> <a name="GenerateSecret" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.generateSecret"></a>

```csharp
public bool|IResolvable GenerateSecret { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdTokenValidity`<sup>Required</sup> <a name="IdTokenValidity" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.idTokenValidity"></a>

```csharp
public double IdTokenValidity { get; }
```

- *Type:* double

---

##### `LogoutUrLs`<sup>Required</sup> <a name="LogoutUrLs" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.logoutUrLs"></a>

```csharp
public string[] LogoutUrLs { get; }
```

- *Type:* string[]

---

##### `PreventUserExistenceErrors`<sup>Required</sup> <a name="PreventUserExistenceErrors" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.preventUserExistenceErrors"></a>

```csharp
public string PreventUserExistenceErrors { get; }
```

- *Type:* string

---

##### `ReadAttributes`<sup>Required</sup> <a name="ReadAttributes" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.readAttributes"></a>

```csharp
public string[] ReadAttributes { get; }
```

- *Type:* string[]

---

##### `RefreshTokenValidity`<sup>Required</sup> <a name="RefreshTokenValidity" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenValidity"></a>

```csharp
public double RefreshTokenValidity { get; }
```

- *Type:* double

---

##### `SupportedIdentityProviders`<sup>Required</sup> <a name="SupportedIdentityProviders" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.supportedIdentityProviders"></a>

```csharp
public string[] SupportedIdentityProviders { get; }
```

- *Type:* string[]

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.userPoolId"></a>

```csharp
public string UserPoolId { get; }
```

- *Type:* string

---

##### `WriteAttributes`<sup>Required</sup> <a name="WriteAttributes" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.writeAttributes"></a>

```csharp
public string[] WriteAttributes { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolClientAnalyticsConfiguration <a name="CognitoUserPoolClientAnalyticsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolClientAnalyticsConfiguration {
    string ApplicationArn = null,
    string ApplicationId = null,
    string ExternalId = null,
    string RoleArn = null,
    bool|IResolvable UserDataShared = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.applicationArn">ApplicationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#application_arn CognitoUserPoolClient#application_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.applicationId">ApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#application_id CognitoUserPoolClient#application_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.externalId">ExternalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#external_id CognitoUserPoolClient#external_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#role_arn CognitoUserPoolClient#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.userDataShared">UserDataShared</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#user_data_shared CognitoUserPoolClient#user_data_shared}. |

---

##### `ApplicationArn`<sup>Optional</sup> <a name="ApplicationArn" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.applicationArn"></a>

```csharp
public string ApplicationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#application_arn CognitoUserPoolClient#application_arn}.

---

##### `ApplicationId`<sup>Optional</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#application_id CognitoUserPoolClient#application_id}.

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#external_id CognitoUserPoolClient#external_id}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#role_arn CognitoUserPoolClient#role_arn}.

---

##### `UserDataShared`<sup>Optional</sup> <a name="UserDataShared" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.userDataShared"></a>

```csharp
public bool|IResolvable UserDataShared { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#user_data_shared CognitoUserPoolClient#user_data_shared}.

---

### CognitoUserPoolClientConfig <a name="CognitoUserPoolClientConfig" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolClientConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string UserPoolId,
    double AccessTokenValidity = null,
    string[] AllowedOAuthFlows = null,
    bool|IResolvable AllowedOAuthFlowsUserPoolClient = null,
    string[] AllowedOAuthScopes = null,
    CognitoUserPoolClientAnalyticsConfiguration AnalyticsConfiguration = null,
    double AuthSessionValidity = null,
    string[] CallbackUrLs = null,
    string ClientName = null,
    string DefaultRedirectUri = null,
    bool|IResolvable EnablePropagateAdditionalUserContextData = null,
    bool|IResolvable EnableTokenRevocation = null,
    string[] ExplicitAuthFlows = null,
    bool|IResolvable GenerateSecret = null,
    double IdTokenValidity = null,
    string[] LogoutUrLs = null,
    string PreventUserExistenceErrors = null,
    string[] ReadAttributes = null,
    CognitoUserPoolClientRefreshTokenRotation RefreshTokenRotation = null,
    double RefreshTokenValidity = null,
    string[] SupportedIdentityProviders = null,
    CognitoUserPoolClientTokenValidityUnits TokenValidityUnits = null,
    string[] WriteAttributes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.userPoolId">UserPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#user_pool_id CognitoUserPoolClient#user_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.accessTokenValidity">AccessTokenValidity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#access_token_validity CognitoUserPoolClient#access_token_validity}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOAuthFlows">AllowedOAuthFlows</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#allowed_o_auth_flows CognitoUserPoolClient#allowed_o_auth_flows}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOAuthFlowsUserPoolClient">AllowedOAuthFlowsUserPoolClient</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#allowed_o_auth_flows_user_pool_client CognitoUserPoolClient#allowed_o_auth_flows_user_pool_client}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOAuthScopes">AllowedOAuthScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#allowed_o_auth_scopes CognitoUserPoolClient#allowed_o_auth_scopes}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.analyticsConfiguration">AnalyticsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#analytics_configuration CognitoUserPoolClient#analytics_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.authSessionValidity">AuthSessionValidity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#auth_session_validity CognitoUserPoolClient#auth_session_validity}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.callbackUrLs">CallbackUrLs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#callback_ur_ls CognitoUserPoolClient#callback_ur_ls}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.clientName">ClientName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#client_name CognitoUserPoolClient#client_name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.defaultRedirectUri">DefaultRedirectUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#default_redirect_uri CognitoUserPoolClient#default_redirect_uri}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.enablePropagateAdditionalUserContextData">EnablePropagateAdditionalUserContextData</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#enable_propagate_additional_user_context_data CognitoUserPoolClient#enable_propagate_additional_user_context_data}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.enableTokenRevocation">EnableTokenRevocation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#enable_token_revocation CognitoUserPoolClient#enable_token_revocation}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.explicitAuthFlows">ExplicitAuthFlows</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#explicit_auth_flows CognitoUserPoolClient#explicit_auth_flows}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.generateSecret">GenerateSecret</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#generate_secret CognitoUserPoolClient#generate_secret}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.idTokenValidity">IdTokenValidity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#id_token_validity CognitoUserPoolClient#id_token_validity}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.logoutUrLs">LogoutUrLs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#logout_ur_ls CognitoUserPoolClient#logout_ur_ls}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.preventUserExistenceErrors">PreventUserExistenceErrors</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#prevent_user_existence_errors CognitoUserPoolClient#prevent_user_existence_errors}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.readAttributes">ReadAttributes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#read_attributes CognitoUserPoolClient#read_attributes}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.refreshTokenRotation">RefreshTokenRotation</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation">CognitoUserPoolClientRefreshTokenRotation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#refresh_token_rotation CognitoUserPoolClient#refresh_token_rotation}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.refreshTokenValidity">RefreshTokenValidity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#refresh_token_validity CognitoUserPoolClient#refresh_token_validity}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.supportedIdentityProviders">SupportedIdentityProviders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#supported_identity_providers CognitoUserPoolClient#supported_identity_providers}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.tokenValidityUnits">TokenValidityUnits</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#token_validity_units CognitoUserPoolClient#token_validity_units}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.writeAttributes">WriteAttributes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#write_attributes CognitoUserPoolClient#write_attributes}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.userPoolId"></a>

```csharp
public string UserPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#user_pool_id CognitoUserPoolClient#user_pool_id}.

---

##### `AccessTokenValidity`<sup>Optional</sup> <a name="AccessTokenValidity" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.accessTokenValidity"></a>

```csharp
public double AccessTokenValidity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#access_token_validity CognitoUserPoolClient#access_token_validity}.

---

##### `AllowedOAuthFlows`<sup>Optional</sup> <a name="AllowedOAuthFlows" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOAuthFlows"></a>

```csharp
public string[] AllowedOAuthFlows { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#allowed_o_auth_flows CognitoUserPoolClient#allowed_o_auth_flows}.

---

##### `AllowedOAuthFlowsUserPoolClient`<sup>Optional</sup> <a name="AllowedOAuthFlowsUserPoolClient" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOAuthFlowsUserPoolClient"></a>

```csharp
public bool|IResolvable AllowedOAuthFlowsUserPoolClient { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#allowed_o_auth_flows_user_pool_client CognitoUserPoolClient#allowed_o_auth_flows_user_pool_client}.

---

##### `AllowedOAuthScopes`<sup>Optional</sup> <a name="AllowedOAuthScopes" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOAuthScopes"></a>

```csharp
public string[] AllowedOAuthScopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#allowed_o_auth_scopes CognitoUserPoolClient#allowed_o_auth_scopes}.

---

##### `AnalyticsConfiguration`<sup>Optional</sup> <a name="AnalyticsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.analyticsConfiguration"></a>

```csharp
public CognitoUserPoolClientAnalyticsConfiguration AnalyticsConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#analytics_configuration CognitoUserPoolClient#analytics_configuration}.

---

##### `AuthSessionValidity`<sup>Optional</sup> <a name="AuthSessionValidity" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.authSessionValidity"></a>

```csharp
public double AuthSessionValidity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#auth_session_validity CognitoUserPoolClient#auth_session_validity}.

---

##### `CallbackUrLs`<sup>Optional</sup> <a name="CallbackUrLs" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.callbackUrLs"></a>

```csharp
public string[] CallbackUrLs { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#callback_ur_ls CognitoUserPoolClient#callback_ur_ls}.

---

##### `ClientName`<sup>Optional</sup> <a name="ClientName" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.clientName"></a>

```csharp
public string ClientName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#client_name CognitoUserPoolClient#client_name}.

---

##### `DefaultRedirectUri`<sup>Optional</sup> <a name="DefaultRedirectUri" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.defaultRedirectUri"></a>

```csharp
public string DefaultRedirectUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#default_redirect_uri CognitoUserPoolClient#default_redirect_uri}.

---

##### `EnablePropagateAdditionalUserContextData`<sup>Optional</sup> <a name="EnablePropagateAdditionalUserContextData" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.enablePropagateAdditionalUserContextData"></a>

```csharp
public bool|IResolvable EnablePropagateAdditionalUserContextData { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#enable_propagate_additional_user_context_data CognitoUserPoolClient#enable_propagate_additional_user_context_data}.

---

##### `EnableTokenRevocation`<sup>Optional</sup> <a name="EnableTokenRevocation" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.enableTokenRevocation"></a>

```csharp
public bool|IResolvable EnableTokenRevocation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#enable_token_revocation CognitoUserPoolClient#enable_token_revocation}.

---

##### `ExplicitAuthFlows`<sup>Optional</sup> <a name="ExplicitAuthFlows" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.explicitAuthFlows"></a>

```csharp
public string[] ExplicitAuthFlows { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#explicit_auth_flows CognitoUserPoolClient#explicit_auth_flows}.

---

##### `GenerateSecret`<sup>Optional</sup> <a name="GenerateSecret" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.generateSecret"></a>

```csharp
public bool|IResolvable GenerateSecret { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#generate_secret CognitoUserPoolClient#generate_secret}.

---

##### `IdTokenValidity`<sup>Optional</sup> <a name="IdTokenValidity" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.idTokenValidity"></a>

```csharp
public double IdTokenValidity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#id_token_validity CognitoUserPoolClient#id_token_validity}.

---

##### `LogoutUrLs`<sup>Optional</sup> <a name="LogoutUrLs" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.logoutUrLs"></a>

```csharp
public string[] LogoutUrLs { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#logout_ur_ls CognitoUserPoolClient#logout_ur_ls}.

---

##### `PreventUserExistenceErrors`<sup>Optional</sup> <a name="PreventUserExistenceErrors" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.preventUserExistenceErrors"></a>

```csharp
public string PreventUserExistenceErrors { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#prevent_user_existence_errors CognitoUserPoolClient#prevent_user_existence_errors}.

---

##### `ReadAttributes`<sup>Optional</sup> <a name="ReadAttributes" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.readAttributes"></a>

```csharp
public string[] ReadAttributes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#read_attributes CognitoUserPoolClient#read_attributes}.

---

##### `RefreshTokenRotation`<sup>Optional</sup> <a name="RefreshTokenRotation" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.refreshTokenRotation"></a>

```csharp
public CognitoUserPoolClientRefreshTokenRotation RefreshTokenRotation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation">CognitoUserPoolClientRefreshTokenRotation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#refresh_token_rotation CognitoUserPoolClient#refresh_token_rotation}.

---

##### `RefreshTokenValidity`<sup>Optional</sup> <a name="RefreshTokenValidity" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.refreshTokenValidity"></a>

```csharp
public double RefreshTokenValidity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#refresh_token_validity CognitoUserPoolClient#refresh_token_validity}.

---

##### `SupportedIdentityProviders`<sup>Optional</sup> <a name="SupportedIdentityProviders" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.supportedIdentityProviders"></a>

```csharp
public string[] SupportedIdentityProviders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#supported_identity_providers CognitoUserPoolClient#supported_identity_providers}.

---

##### `TokenValidityUnits`<sup>Optional</sup> <a name="TokenValidityUnits" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.tokenValidityUnits"></a>

```csharp
public CognitoUserPoolClientTokenValidityUnits TokenValidityUnits { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#token_validity_units CognitoUserPoolClient#token_validity_units}.

---

##### `WriteAttributes`<sup>Optional</sup> <a name="WriteAttributes" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.writeAttributes"></a>

```csharp
public string[] WriteAttributes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#write_attributes CognitoUserPoolClient#write_attributes}.

---

### CognitoUserPoolClientRefreshTokenRotation <a name="CognitoUserPoolClientRefreshTokenRotation" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolClientRefreshTokenRotation {
    string Feature = null,
    double RetryGracePeriodSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation.property.feature">Feature</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#feature CognitoUserPoolClient#feature}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation.property.retryGracePeriodSeconds">RetryGracePeriodSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#retry_grace_period_seconds CognitoUserPoolClient#retry_grace_period_seconds}. |

---

##### `Feature`<sup>Optional</sup> <a name="Feature" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation.property.feature"></a>

```csharp
public string Feature { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#feature CognitoUserPoolClient#feature}.

---

##### `RetryGracePeriodSeconds`<sup>Optional</sup> <a name="RetryGracePeriodSeconds" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation.property.retryGracePeriodSeconds"></a>

```csharp
public double RetryGracePeriodSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#retry_grace_period_seconds CognitoUserPoolClient#retry_grace_period_seconds}.

---

### CognitoUserPoolClientTokenValidityUnits <a name="CognitoUserPoolClientTokenValidityUnits" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolClientTokenValidityUnits {
    string AccessToken = null,
    string IdToken = null,
    string RefreshToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.accessToken">AccessToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#access_token CognitoUserPoolClient#access_token}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.idToken">IdToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#id_token CognitoUserPoolClient#id_token}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.refreshToken">RefreshToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#refresh_token CognitoUserPoolClient#refresh_token}. |

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.accessToken"></a>

```csharp
public string AccessToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#access_token CognitoUserPoolClient#access_token}.

---

##### `IdToken`<sup>Optional</sup> <a name="IdToken" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.idToken"></a>

```csharp
public string IdToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#id_token CognitoUserPoolClient#id_token}.

---

##### `RefreshToken`<sup>Optional</sup> <a name="RefreshToken" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.refreshToken"></a>

```csharp
public string RefreshToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#refresh_token CognitoUserPoolClient#refresh_token}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolClientAnalyticsConfigurationOutputReference <a name="CognitoUserPoolClientAnalyticsConfigurationOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolClientAnalyticsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationArn">ResetApplicationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationId">ResetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetUserDataShared">ResetUserDataShared</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationArn` <a name="ResetApplicationArn" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationArn"></a>

```csharp
private void ResetApplicationArn()
```

##### `ResetApplicationId` <a name="ResetApplicationId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationId"></a>

```csharp
private void ResetApplicationId()
```

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetExternalId"></a>

```csharp
private void ResetExternalId()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetUserDataShared` <a name="ResetUserDataShared" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetUserDataShared"></a>

```csharp
private void ResetUserDataShared()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArnInput">ApplicationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataSharedInput">UserDataSharedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn">ApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared">UserDataShared</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationArnInput`<sup>Optional</sup> <a name="ApplicationArnInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArnInput"></a>

```csharp
public string ApplicationArnInput { get; }
```

- *Type:* string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `UserDataSharedInput`<sup>Optional</sup> <a name="UserDataSharedInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataSharedInput"></a>

```csharp
public bool|IResolvable UserDataSharedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn"></a>

```csharp
public string ApplicationArn { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `UserDataShared`<sup>Required</sup> <a name="UserDataShared" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared"></a>

```csharp
public bool|IResolvable UserDataShared { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitoUserPoolClientAnalyticsConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a>

---


### CognitoUserPoolClientRefreshTokenRotationOutputReference <a name="CognitoUserPoolClientRefreshTokenRotationOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolClientRefreshTokenRotationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.resetFeature">ResetFeature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.resetRetryGracePeriodSeconds">ResetRetryGracePeriodSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFeature` <a name="ResetFeature" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.resetFeature"></a>

```csharp
private void ResetFeature()
```

##### `ResetRetryGracePeriodSeconds` <a name="ResetRetryGracePeriodSeconds" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.resetRetryGracePeriodSeconds"></a>

```csharp
private void ResetRetryGracePeriodSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.featureInput">FeatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.retryGracePeriodSecondsInput">RetryGracePeriodSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.feature">Feature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.retryGracePeriodSeconds">RetryGracePeriodSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation">CognitoUserPoolClientRefreshTokenRotation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FeatureInput`<sup>Optional</sup> <a name="FeatureInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.featureInput"></a>

```csharp
public string FeatureInput { get; }
```

- *Type:* string

---

##### `RetryGracePeriodSecondsInput`<sup>Optional</sup> <a name="RetryGracePeriodSecondsInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.retryGracePeriodSecondsInput"></a>

```csharp
public double RetryGracePeriodSecondsInput { get; }
```

- *Type:* double

---

##### `Feature`<sup>Required</sup> <a name="Feature" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.feature"></a>

```csharp
public string Feature { get; }
```

- *Type:* string

---

##### `RetryGracePeriodSeconds`<sup>Required</sup> <a name="RetryGracePeriodSeconds" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.retryGracePeriodSeconds"></a>

```csharp
public double RetryGracePeriodSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitoUserPoolClientRefreshTokenRotation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation">CognitoUserPoolClientRefreshTokenRotation</a>

---


### CognitoUserPoolClientTokenValidityUnitsOutputReference <a name="CognitoUserPoolClientTokenValidityUnitsOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoUserPoolClientTokenValidityUnitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetIdToken">ResetIdToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetRefreshToken">ResetRefreshToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetAccessToken"></a>

```csharp
private void ResetAccessToken()
```

##### `ResetIdToken` <a name="ResetIdToken" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetIdToken"></a>

```csharp
private void ResetIdToken()
```

##### `ResetRefreshToken` <a name="ResetRefreshToken" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetRefreshToken"></a>

```csharp
private void ResetRefreshToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessTokenInput">AccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.idTokenInput">IdTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshTokenInput">RefreshTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessToken">AccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.idToken">IdToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken">RefreshToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessTokenInput"></a>

```csharp
public string AccessTokenInput { get; }
```

- *Type:* string

---

##### `IdTokenInput`<sup>Optional</sup> <a name="IdTokenInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.idTokenInput"></a>

```csharp
public string IdTokenInput { get; }
```

- *Type:* string

---

##### `RefreshTokenInput`<sup>Optional</sup> <a name="RefreshTokenInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshTokenInput"></a>

```csharp
public string RefreshTokenInput { get; }
```

- *Type:* string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessToken"></a>

```csharp
public string AccessToken { get; }
```

- *Type:* string

---

##### `IdToken`<sup>Required</sup> <a name="IdToken" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.idToken"></a>

```csharp
public string IdToken { get; }
```

- *Type:* string

---

##### `RefreshToken`<sup>Required</sup> <a name="RefreshToken" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken"></a>

```csharp
public string RefreshToken { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitoUserPoolClientTokenValidityUnits InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a>

---



