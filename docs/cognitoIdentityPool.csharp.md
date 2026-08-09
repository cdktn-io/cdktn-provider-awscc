# `cognitoIdentityPool` Submodule <a name="`cognitoIdentityPool` Submodule" id="@cdktn/provider-awscc.cognitoIdentityPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoIdentityPool <a name="CognitoIdentityPool" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool awscc_cognito_identity_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoIdentityPool(Construct Scope, string Id, CognitoIdentityPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig">CognitoIdentityPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig">CognitoIdentityPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putCognitoIdentityProviders">PutCognitoIdentityProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putCognitoStreams">PutCognitoStreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putIdentityPoolTags">PutIdentityPoolTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putPushSync">PutPushSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetAllowClassicFlow">ResetAllowClassicFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetCognitoEvents">ResetCognitoEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetCognitoIdentityProviders">ResetCognitoIdentityProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetCognitoStreams">ResetCognitoStreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetDeveloperProviderName">ResetDeveloperProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetIdentityPoolName">ResetIdentityPoolName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetIdentityPoolTags">ResetIdentityPoolTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetOpenIdConnectProviderArNs">ResetOpenIdConnectProviderArNs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetPushSync">ResetPushSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetSamlProviderArNs">ResetSamlProviderArNs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetSupportedLoginProviders">ResetSupportedLoginProviders</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCognitoIdentityProviders` <a name="PutCognitoIdentityProviders" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putCognitoIdentityProviders"></a>

```csharp
private void PutCognitoIdentityProviders(IResolvable|CognitoIdentityPoolCognitoIdentityProviders[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putCognitoIdentityProviders.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>[]

---

##### `PutCognitoStreams` <a name="PutCognitoStreams" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putCognitoStreams"></a>

```csharp
private void PutCognitoStreams(CognitoIdentityPoolCognitoStreams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putCognitoStreams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams">CognitoIdentityPoolCognitoStreams</a>

---

##### `PutIdentityPoolTags` <a name="PutIdentityPoolTags" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putIdentityPoolTags"></a>

```csharp
private void PutIdentityPoolTags(IResolvable|CognitoIdentityPoolIdentityPoolTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putIdentityPoolTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a>[]

---

##### `PutPushSync` <a name="PutPushSync" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putPushSync"></a>

```csharp
private void PutPushSync(CognitoIdentityPoolPushSync Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putPushSync.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync">CognitoIdentityPoolPushSync</a>

---

##### `ResetAllowClassicFlow` <a name="ResetAllowClassicFlow" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetAllowClassicFlow"></a>

```csharp
private void ResetAllowClassicFlow()
```

##### `ResetCognitoEvents` <a name="ResetCognitoEvents" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetCognitoEvents"></a>

```csharp
private void ResetCognitoEvents()
```

##### `ResetCognitoIdentityProviders` <a name="ResetCognitoIdentityProviders" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetCognitoIdentityProviders"></a>

```csharp
private void ResetCognitoIdentityProviders()
```

##### `ResetCognitoStreams` <a name="ResetCognitoStreams" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetCognitoStreams"></a>

```csharp
private void ResetCognitoStreams()
```

##### `ResetDeveloperProviderName` <a name="ResetDeveloperProviderName" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetDeveloperProviderName"></a>

```csharp
private void ResetDeveloperProviderName()
```

##### `ResetIdentityPoolName` <a name="ResetIdentityPoolName" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetIdentityPoolName"></a>

```csharp
private void ResetIdentityPoolName()
```

##### `ResetIdentityPoolTags` <a name="ResetIdentityPoolTags" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetIdentityPoolTags"></a>

```csharp
private void ResetIdentityPoolTags()
```

##### `ResetOpenIdConnectProviderArNs` <a name="ResetOpenIdConnectProviderArNs" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetOpenIdConnectProviderArNs"></a>

```csharp
private void ResetOpenIdConnectProviderArNs()
```

##### `ResetPushSync` <a name="ResetPushSync" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetPushSync"></a>

```csharp
private void ResetPushSync()
```

##### `ResetSamlProviderArNs` <a name="ResetSamlProviderArNs" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetSamlProviderArNs"></a>

```csharp
private void ResetSamlProviderArNs()
```

##### `ResetSupportedLoginProviders` <a name="ResetSupportedLoginProviders" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetSupportedLoginProviders"></a>

```csharp
private void ResetSupportedLoginProviders()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoIdentityPool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoIdentityPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoIdentityPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoIdentityPool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CognitoIdentityPool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CognitoIdentityPool resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitoIdentityPool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitoIdentityPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CognitoIdentityPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoIdentityProviders">CognitoIdentityProviders</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList">CognitoIdentityPoolCognitoIdentityProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoStreams">CognitoStreams</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference">CognitoIdentityPoolCognitoStreamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolId">IdentityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolTags">IdentityPoolTags</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList">CognitoIdentityPoolIdentityPoolTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.pushSync">PushSync</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference">CognitoIdentityPoolPushSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.allowClassicFlowInput">AllowClassicFlowInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.allowUnauthenticatedIdentitiesInput">AllowUnauthenticatedIdentitiesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoEventsInput">CognitoEventsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoIdentityProvidersInput">CognitoIdentityProvidersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoStreamsInput">CognitoStreamsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams">CognitoIdentityPoolCognitoStreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.developerProviderNameInput">DeveloperProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolNameInput">IdentityPoolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolTagsInput">IdentityPoolTagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.openIdConnectProviderArNsInput">OpenIdConnectProviderArNsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.pushSyncInput">PushSyncInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync">CognitoIdentityPoolPushSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.samlProviderArNsInput">SamlProviderArNsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.supportedLoginProvidersInput">SupportedLoginProvidersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.allowClassicFlow">AllowClassicFlow</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.allowUnauthenticatedIdentities">AllowUnauthenticatedIdentities</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoEvents">CognitoEvents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.developerProviderName">DeveloperProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolName">IdentityPoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.openIdConnectProviderArNs">OpenIdConnectProviderArNs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.samlProviderArNs">SamlProviderArNs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.supportedLoginProviders">SupportedLoginProviders</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CognitoIdentityProviders`<sup>Required</sup> <a name="CognitoIdentityProviders" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoIdentityProviders"></a>

```csharp
public CognitoIdentityPoolCognitoIdentityProvidersList CognitoIdentityProviders { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList">CognitoIdentityPoolCognitoIdentityProvidersList</a>

---

##### `CognitoStreams`<sup>Required</sup> <a name="CognitoStreams" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoStreams"></a>

```csharp
public CognitoIdentityPoolCognitoStreamsOutputReference CognitoStreams { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference">CognitoIdentityPoolCognitoStreamsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityPoolId`<sup>Required</sup> <a name="IdentityPoolId" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolId"></a>

```csharp
public string IdentityPoolId { get; }
```

- *Type:* string

---

##### `IdentityPoolTags`<sup>Required</sup> <a name="IdentityPoolTags" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolTags"></a>

```csharp
public CognitoIdentityPoolIdentityPoolTagsList IdentityPoolTags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList">CognitoIdentityPoolIdentityPoolTagsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PushSync`<sup>Required</sup> <a name="PushSync" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.pushSync"></a>

```csharp
public CognitoIdentityPoolPushSyncOutputReference PushSync { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference">CognitoIdentityPoolPushSyncOutputReference</a>

---

##### `AllowClassicFlowInput`<sup>Optional</sup> <a name="AllowClassicFlowInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.allowClassicFlowInput"></a>

```csharp
public bool|IResolvable AllowClassicFlowInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowUnauthenticatedIdentitiesInput`<sup>Optional</sup> <a name="AllowUnauthenticatedIdentitiesInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.allowUnauthenticatedIdentitiesInput"></a>

```csharp
public bool|IResolvable AllowUnauthenticatedIdentitiesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CognitoEventsInput`<sup>Optional</sup> <a name="CognitoEventsInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoEventsInput"></a>

```csharp
public string CognitoEventsInput { get; }
```

- *Type:* string

---

##### `CognitoIdentityProvidersInput`<sup>Optional</sup> <a name="CognitoIdentityProvidersInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoIdentityProvidersInput"></a>

```csharp
public IResolvable|CognitoIdentityPoolCognitoIdentityProviders[] CognitoIdentityProvidersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>[]

---

##### `CognitoStreamsInput`<sup>Optional</sup> <a name="CognitoStreamsInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoStreamsInput"></a>

```csharp
public IResolvable|CognitoIdentityPoolCognitoStreams CognitoStreamsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams">CognitoIdentityPoolCognitoStreams</a>

---

##### `DeveloperProviderNameInput`<sup>Optional</sup> <a name="DeveloperProviderNameInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.developerProviderNameInput"></a>

```csharp
public string DeveloperProviderNameInput { get; }
```

- *Type:* string

---

##### `IdentityPoolNameInput`<sup>Optional</sup> <a name="IdentityPoolNameInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolNameInput"></a>

```csharp
public string IdentityPoolNameInput { get; }
```

- *Type:* string

---

##### `IdentityPoolTagsInput`<sup>Optional</sup> <a name="IdentityPoolTagsInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolTagsInput"></a>

```csharp
public IResolvable|CognitoIdentityPoolIdentityPoolTags[] IdentityPoolTagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a>[]

---

##### `OpenIdConnectProviderArNsInput`<sup>Optional</sup> <a name="OpenIdConnectProviderArNsInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.openIdConnectProviderArNsInput"></a>

```csharp
public string[] OpenIdConnectProviderArNsInput { get; }
```

- *Type:* string[]

---

##### `PushSyncInput`<sup>Optional</sup> <a name="PushSyncInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.pushSyncInput"></a>

```csharp
public IResolvable|CognitoIdentityPoolPushSync PushSyncInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync">CognitoIdentityPoolPushSync</a>

---

##### `SamlProviderArNsInput`<sup>Optional</sup> <a name="SamlProviderArNsInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.samlProviderArNsInput"></a>

```csharp
public string[] SamlProviderArNsInput { get; }
```

- *Type:* string[]

---

##### `SupportedLoginProvidersInput`<sup>Optional</sup> <a name="SupportedLoginProvidersInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.supportedLoginProvidersInput"></a>

```csharp
public string SupportedLoginProvidersInput { get; }
```

- *Type:* string

---

##### `AllowClassicFlow`<sup>Required</sup> <a name="AllowClassicFlow" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.allowClassicFlow"></a>

```csharp
public bool|IResolvable AllowClassicFlow { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowUnauthenticatedIdentities`<sup>Required</sup> <a name="AllowUnauthenticatedIdentities" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.allowUnauthenticatedIdentities"></a>

```csharp
public bool|IResolvable AllowUnauthenticatedIdentities { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CognitoEvents`<sup>Required</sup> <a name="CognitoEvents" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoEvents"></a>

```csharp
public string CognitoEvents { get; }
```

- *Type:* string

---

##### `DeveloperProviderName`<sup>Required</sup> <a name="DeveloperProviderName" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.developerProviderName"></a>

```csharp
public string DeveloperProviderName { get; }
```

- *Type:* string

---

##### `IdentityPoolName`<sup>Required</sup> <a name="IdentityPoolName" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolName"></a>

```csharp
public string IdentityPoolName { get; }
```

- *Type:* string

---

##### `OpenIdConnectProviderArNs`<sup>Required</sup> <a name="OpenIdConnectProviderArNs" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.openIdConnectProviderArNs"></a>

```csharp
public string[] OpenIdConnectProviderArNs { get; }
```

- *Type:* string[]

---

##### `SamlProviderArNs`<sup>Required</sup> <a name="SamlProviderArNs" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.samlProviderArNs"></a>

```csharp
public string[] SamlProviderArNs { get; }
```

- *Type:* string[]

---

##### `SupportedLoginProviders`<sup>Required</sup> <a name="SupportedLoginProviders" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.supportedLoginProviders"></a>

```csharp
public string SupportedLoginProviders { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoIdentityPoolCognitoIdentityProviders <a name="CognitoIdentityPoolCognitoIdentityProviders" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoIdentityPoolCognitoIdentityProviders {
    string ClientId = null,
    string ProviderName = null,
    bool|IResolvable ServerSideTokenCheck = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#client_id CognitoIdentityPool#client_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.providerName">ProviderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#provider_name CognitoIdentityPool#provider_name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.serverSideTokenCheck">ServerSideTokenCheck</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#server_side_token_check CognitoIdentityPool#server_side_token_check}. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#client_id CognitoIdentityPool#client_id}.

---

##### `ProviderName`<sup>Optional</sup> <a name="ProviderName" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.providerName"></a>

```csharp
public string ProviderName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#provider_name CognitoIdentityPool#provider_name}.

---

##### `ServerSideTokenCheck`<sup>Optional</sup> <a name="ServerSideTokenCheck" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.serverSideTokenCheck"></a>

```csharp
public bool|IResolvable ServerSideTokenCheck { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#server_side_token_check CognitoIdentityPool#server_side_token_check}.

---

### CognitoIdentityPoolCognitoStreams <a name="CognitoIdentityPoolCognitoStreams" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoIdentityPoolCognitoStreams {
    string RoleArn = null,
    string StreamingStatus = null,
    string StreamName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#role_arn CognitoIdentityPool#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams.property.streamingStatus">StreamingStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#streaming_status CognitoIdentityPool#streaming_status}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams.property.streamName">StreamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#stream_name CognitoIdentityPool#stream_name}. |

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#role_arn CognitoIdentityPool#role_arn}.

---

##### `StreamingStatus`<sup>Optional</sup> <a name="StreamingStatus" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams.property.streamingStatus"></a>

```csharp
public string StreamingStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#streaming_status CognitoIdentityPool#streaming_status}.

---

##### `StreamName`<sup>Optional</sup> <a name="StreamName" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams.property.streamName"></a>

```csharp
public string StreamName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#stream_name CognitoIdentityPool#stream_name}.

---

### CognitoIdentityPoolConfig <a name="CognitoIdentityPoolConfig" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoIdentityPoolConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable AllowUnauthenticatedIdentities,
    bool|IResolvable AllowClassicFlow = null,
    string CognitoEvents = null,
    IResolvable|CognitoIdentityPoolCognitoIdentityProviders[] CognitoIdentityProviders = null,
    CognitoIdentityPoolCognitoStreams CognitoStreams = null,
    string DeveloperProviderName = null,
    string IdentityPoolName = null,
    IResolvable|CognitoIdentityPoolIdentityPoolTags[] IdentityPoolTags = null,
    string[] OpenIdConnectProviderArNs = null,
    CognitoIdentityPoolPushSync PushSync = null,
    string[] SamlProviderArNs = null,
    string SupportedLoginProviders = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.allowUnauthenticatedIdentities">AllowUnauthenticatedIdentities</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#allow_unauthenticated_identities CognitoIdentityPool#allow_unauthenticated_identities}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.allowClassicFlow">AllowClassicFlow</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#allow_classic_flow CognitoIdentityPool#allow_classic_flow}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.cognitoEvents">CognitoEvents</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#cognito_events CognitoIdentityPool#cognito_events}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.cognitoIdentityProviders">CognitoIdentityProviders</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#cognito_identity_providers CognitoIdentityPool#cognito_identity_providers}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.cognitoStreams">CognitoStreams</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams">CognitoIdentityPoolCognitoStreams</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#cognito_streams CognitoIdentityPool#cognito_streams}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.developerProviderName">DeveloperProviderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#developer_provider_name CognitoIdentityPool#developer_provider_name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.identityPoolName">IdentityPoolName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#identity_pool_name CognitoIdentityPool#identity_pool_name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.identityPoolTags">IdentityPoolTags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.openIdConnectProviderArNs">OpenIdConnectProviderArNs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#open_id_connect_provider_ar_ns CognitoIdentityPool#open_id_connect_provider_ar_ns}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.pushSync">PushSync</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync">CognitoIdentityPoolPushSync</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#push_sync CognitoIdentityPool#push_sync}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.samlProviderArNs">SamlProviderArNs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#saml_provider_ar_ns CognitoIdentityPool#saml_provider_ar_ns}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.supportedLoginProviders">SupportedLoginProviders</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#supported_login_providers CognitoIdentityPool#supported_login_providers}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AllowUnauthenticatedIdentities`<sup>Required</sup> <a name="AllowUnauthenticatedIdentities" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.allowUnauthenticatedIdentities"></a>

```csharp
public bool|IResolvable AllowUnauthenticatedIdentities { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#allow_unauthenticated_identities CognitoIdentityPool#allow_unauthenticated_identities}.

---

##### `AllowClassicFlow`<sup>Optional</sup> <a name="AllowClassicFlow" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.allowClassicFlow"></a>

```csharp
public bool|IResolvable AllowClassicFlow { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#allow_classic_flow CognitoIdentityPool#allow_classic_flow}.

---

##### `CognitoEvents`<sup>Optional</sup> <a name="CognitoEvents" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.cognitoEvents"></a>

```csharp
public string CognitoEvents { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#cognito_events CognitoIdentityPool#cognito_events}.

---

##### `CognitoIdentityProviders`<sup>Optional</sup> <a name="CognitoIdentityProviders" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.cognitoIdentityProviders"></a>

```csharp
public IResolvable|CognitoIdentityPoolCognitoIdentityProviders[] CognitoIdentityProviders { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#cognito_identity_providers CognitoIdentityPool#cognito_identity_providers}.

---

##### `CognitoStreams`<sup>Optional</sup> <a name="CognitoStreams" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.cognitoStreams"></a>

```csharp
public CognitoIdentityPoolCognitoStreams CognitoStreams { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams">CognitoIdentityPoolCognitoStreams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#cognito_streams CognitoIdentityPool#cognito_streams}.

---

##### `DeveloperProviderName`<sup>Optional</sup> <a name="DeveloperProviderName" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.developerProviderName"></a>

```csharp
public string DeveloperProviderName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#developer_provider_name CognitoIdentityPool#developer_provider_name}.

---

##### `IdentityPoolName`<sup>Optional</sup> <a name="IdentityPoolName" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.identityPoolName"></a>

```csharp
public string IdentityPoolName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#identity_pool_name CognitoIdentityPool#identity_pool_name}.

---

##### `IdentityPoolTags`<sup>Optional</sup> <a name="IdentityPoolTags" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.identityPoolTags"></a>

```csharp
public IResolvable|CognitoIdentityPoolIdentityPoolTags[] IdentityPoolTags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#identity_pool_tags CognitoIdentityPool#identity_pool_tags}

---

##### `OpenIdConnectProviderArNs`<sup>Optional</sup> <a name="OpenIdConnectProviderArNs" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.openIdConnectProviderArNs"></a>

```csharp
public string[] OpenIdConnectProviderArNs { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#open_id_connect_provider_ar_ns CognitoIdentityPool#open_id_connect_provider_ar_ns}.

---

##### `PushSync`<sup>Optional</sup> <a name="PushSync" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.pushSync"></a>

```csharp
public CognitoIdentityPoolPushSync PushSync { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync">CognitoIdentityPoolPushSync</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#push_sync CognitoIdentityPool#push_sync}.

---

##### `SamlProviderArNs`<sup>Optional</sup> <a name="SamlProviderArNs" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.samlProviderArNs"></a>

```csharp
public string[] SamlProviderArNs { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#saml_provider_ar_ns CognitoIdentityPool#saml_provider_ar_ns}.

---

##### `SupportedLoginProviders`<sup>Optional</sup> <a name="SupportedLoginProviders" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.supportedLoginProviders"></a>

```csharp
public string SupportedLoginProviders { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#supported_login_providers CognitoIdentityPool#supported_login_providers}.

---

### CognitoIdentityPoolIdentityPoolTags <a name="CognitoIdentityPoolIdentityPoolTags" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoIdentityPoolIdentityPoolTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#key CognitoIdentityPool#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#value CognitoIdentityPool#value}

---

### CognitoIdentityPoolPushSync <a name="CognitoIdentityPoolPushSync" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoIdentityPoolPushSync {
    string[] ApplicationArns = null,
    string RoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync.property.applicationArns">ApplicationArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#application_arns CognitoIdentityPool#application_arns}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#role_arn CognitoIdentityPool#role_arn}. |

---

##### `ApplicationArns`<sup>Optional</sup> <a name="ApplicationArns" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync.property.applicationArns"></a>

```csharp
public string[] ApplicationArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#application_arns CognitoIdentityPool#application_arns}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cognito_identity_pool#role_arn CognitoIdentityPool#role_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoIdentityPoolCognitoIdentityProvidersList <a name="CognitoIdentityPoolCognitoIdentityProvidersList" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoIdentityPoolCognitoIdentityProvidersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.get"></a>

```csharp
private CognitoIdentityPoolCognitoIdentityProvidersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.internalValue"></a>

```csharp
public IResolvable|CognitoIdentityPoolCognitoIdentityProviders[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>[]

---


### CognitoIdentityPoolCognitoIdentityProvidersOutputReference <a name="CognitoIdentityPoolCognitoIdentityProvidersOutputReference" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoIdentityPoolCognitoIdentityProvidersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetProviderName">ResetProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetServerSideTokenCheck">ResetServerSideTokenCheck</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetProviderName` <a name="ResetProviderName" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetProviderName"></a>

```csharp
private void ResetProviderName()
```

##### `ResetServerSideTokenCheck` <a name="ResetServerSideTokenCheck" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetServerSideTokenCheck"></a>

```csharp
private void ResetServerSideTokenCheck()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerNameInput">ProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheckInput">ServerSideTokenCheckInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerName">ProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheck">ServerSideTokenCheck</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ProviderNameInput`<sup>Optional</sup> <a name="ProviderNameInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerNameInput"></a>

```csharp
public string ProviderNameInput { get; }
```

- *Type:* string

---

##### `ServerSideTokenCheckInput`<sup>Optional</sup> <a name="ServerSideTokenCheckInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheckInput"></a>

```csharp
public bool|IResolvable ServerSideTokenCheckInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerName"></a>

```csharp
public string ProviderName { get; }
```

- *Type:* string

---

##### `ServerSideTokenCheck`<sup>Required</sup> <a name="ServerSideTokenCheck" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheck"></a>

```csharp
public bool|IResolvable ServerSideTokenCheck { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitoIdentityPoolCognitoIdentityProviders InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>

---


### CognitoIdentityPoolCognitoStreamsOutputReference <a name="CognitoIdentityPoolCognitoStreamsOutputReference" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoIdentityPoolCognitoStreamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.resetStreamingStatus">ResetStreamingStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.resetStreamName">ResetStreamName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetStreamingStatus` <a name="ResetStreamingStatus" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.resetStreamingStatus"></a>

```csharp
private void ResetStreamingStatus()
```

##### `ResetStreamName` <a name="ResetStreamName" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.resetStreamName"></a>

```csharp
private void ResetStreamName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.streamingStatusInput">StreamingStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.streamNameInput">StreamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.streamingStatus">StreamingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.streamName">StreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams">CognitoIdentityPoolCognitoStreams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `StreamingStatusInput`<sup>Optional</sup> <a name="StreamingStatusInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.streamingStatusInput"></a>

```csharp
public string StreamingStatusInput { get; }
```

- *Type:* string

---

##### `StreamNameInput`<sup>Optional</sup> <a name="StreamNameInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.streamNameInput"></a>

```csharp
public string StreamNameInput { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `StreamingStatus`<sup>Required</sup> <a name="StreamingStatus" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.streamingStatus"></a>

```csharp
public string StreamingStatus { get; }
```

- *Type:* string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.streamName"></a>

```csharp
public string StreamName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitoIdentityPoolCognitoStreams InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams">CognitoIdentityPoolCognitoStreams</a>

---


### CognitoIdentityPoolIdentityPoolTagsList <a name="CognitoIdentityPoolIdentityPoolTagsList" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoIdentityPoolIdentityPoolTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.get"></a>

```csharp
private CognitoIdentityPoolIdentityPoolTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.property.internalValue"></a>

```csharp
public IResolvable|CognitoIdentityPoolIdentityPoolTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a>[]

---


### CognitoIdentityPoolIdentityPoolTagsOutputReference <a name="CognitoIdentityPoolIdentityPoolTagsOutputReference" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoIdentityPoolIdentityPoolTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitoIdentityPoolIdentityPoolTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a>

---


### CognitoIdentityPoolPushSyncOutputReference <a name="CognitoIdentityPoolPushSyncOutputReference" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CognitoIdentityPoolPushSyncOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.resetApplicationArns">ResetApplicationArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationArns` <a name="ResetApplicationArns" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.resetApplicationArns"></a>

```csharp
private void ResetApplicationArns()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.applicationArnsInput">ApplicationArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.applicationArns">ApplicationArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync">CognitoIdentityPoolPushSync</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationArnsInput`<sup>Optional</sup> <a name="ApplicationArnsInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.applicationArnsInput"></a>

```csharp
public string[] ApplicationArnsInput { get; }
```

- *Type:* string[]

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `ApplicationArns`<sup>Required</sup> <a name="ApplicationArns" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.applicationArns"></a>

```csharp
public string[] ApplicationArns { get; }
```

- *Type:* string[]

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitoIdentityPoolPushSync InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync">CognitoIdentityPoolPushSync</a>

---



