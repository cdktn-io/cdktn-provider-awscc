# `amplifyApp` Submodule <a name="`amplifyApp` Submodule" id="@cdktn/provider-awscc.amplifyApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AmplifyApp <a name="AmplifyApp" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app awscc_amplify_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AmplifyApp(Construct Scope, string Id, AmplifyAppConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig">AmplifyAppConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig">AmplifyAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.putAutoBranchCreationConfig">PutAutoBranchCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.putBasicAuthConfig">PutBasicAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.putCacheConfig">PutCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.putCustomRules">PutCustomRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.putEnvironmentVariables">PutEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.putJobConfig">PutJobConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetAutoBranchCreationConfig">ResetAutoBranchCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetBasicAuthConfig">ResetBasicAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetBuildSpec">ResetBuildSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetCacheConfig">ResetCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetComputeRoleArn">ResetComputeRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetCustomHeaders">ResetCustomHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetCustomRules">ResetCustomRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetEnableBranchAutoDeletion">ResetEnableBranchAutoDeletion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetIamServiceRole">ResetIamServiceRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetJobConfig">ResetJobConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetOauthToken">ResetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetPlatform">ResetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetRepository">ResetRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoBranchCreationConfig` <a name="PutAutoBranchCreationConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putAutoBranchCreationConfig"></a>

```csharp
private void PutAutoBranchCreationConfig(AmplifyAppAutoBranchCreationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putAutoBranchCreationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a>

---

##### `PutBasicAuthConfig` <a name="PutBasicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putBasicAuthConfig"></a>

```csharp
private void PutBasicAuthConfig(AmplifyAppBasicAuthConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putBasicAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig">AmplifyAppBasicAuthConfig</a>

---

##### `PutCacheConfig` <a name="PutCacheConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putCacheConfig"></a>

```csharp
private void PutCacheConfig(AmplifyAppCacheConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putCacheConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig">AmplifyAppCacheConfig</a>

---

##### `PutCustomRules` <a name="PutCustomRules" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putCustomRules"></a>

```csharp
private void PutCustomRules(IResolvable|AmplifyAppCustomRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putCustomRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules">AmplifyAppCustomRules</a>[]

---

##### `PutEnvironmentVariables` <a name="PutEnvironmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putEnvironmentVariables"></a>

```csharp
private void PutEnvironmentVariables(IResolvable|AmplifyAppEnvironmentVariables[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putEnvironmentVariables.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables">AmplifyAppEnvironmentVariables</a>[]

---

##### `PutJobConfig` <a name="PutJobConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putJobConfig"></a>

```csharp
private void PutJobConfig(AmplifyAppJobConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putJobConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig">AmplifyAppJobConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putTags"></a>

```csharp
private void PutTags(IResolvable|AmplifyAppTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags">AmplifyAppTags</a>[]

---

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetAccessToken"></a>

```csharp
private void ResetAccessToken()
```

##### `ResetAutoBranchCreationConfig` <a name="ResetAutoBranchCreationConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetAutoBranchCreationConfig"></a>

```csharp
private void ResetAutoBranchCreationConfig()
```

##### `ResetBasicAuthConfig` <a name="ResetBasicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetBasicAuthConfig"></a>

```csharp
private void ResetBasicAuthConfig()
```

##### `ResetBuildSpec` <a name="ResetBuildSpec" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetBuildSpec"></a>

```csharp
private void ResetBuildSpec()
```

##### `ResetCacheConfig` <a name="ResetCacheConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetCacheConfig"></a>

```csharp
private void ResetCacheConfig()
```

##### `ResetComputeRoleArn` <a name="ResetComputeRoleArn" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetComputeRoleArn"></a>

```csharp
private void ResetComputeRoleArn()
```

##### `ResetCustomHeaders` <a name="ResetCustomHeaders" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetCustomHeaders"></a>

```csharp
private void ResetCustomHeaders()
```

##### `ResetCustomRules` <a name="ResetCustomRules" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetCustomRules"></a>

```csharp
private void ResetCustomRules()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnableBranchAutoDeletion` <a name="ResetEnableBranchAutoDeletion" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetEnableBranchAutoDeletion"></a>

```csharp
private void ResetEnableBranchAutoDeletion()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetEnvironmentVariables"></a>

```csharp
private void ResetEnvironmentVariables()
```

##### `ResetIamServiceRole` <a name="ResetIamServiceRole" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetIamServiceRole"></a>

```csharp
private void ResetIamServiceRole()
```

##### `ResetJobConfig` <a name="ResetJobConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetJobConfig"></a>

```csharp
private void ResetJobConfig()
```

##### `ResetOauthToken` <a name="ResetOauthToken" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetOauthToken"></a>

```csharp
private void ResetOauthToken()
```

##### `ResetPlatform` <a name="ResetPlatform" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetPlatform"></a>

```csharp
private void ResetPlatform()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetRepository"></a>

```csharp
private void ResetRepository()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AmplifyApp resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AmplifyApp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AmplifyApp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AmplifyApp.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AmplifyApp.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AmplifyApp resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AmplifyApp to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AmplifyApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AmplifyApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.appName">AppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.autoBranchCreationConfig">AutoBranchCreationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference">AmplifyAppAutoBranchCreationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.basicAuthConfig">BasicAuthConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference">AmplifyAppBasicAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.cacheConfig">CacheConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference">AmplifyAppCacheConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customRules">CustomRules</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList">AmplifyAppCustomRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.defaultDomain">DefaultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.environmentVariables">EnvironmentVariables</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList">AmplifyAppEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.jobConfig">JobConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference">AmplifyAppJobConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList">AmplifyAppTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.accessTokenInput">AccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.autoBranchCreationConfigInput">AutoBranchCreationConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.basicAuthConfigInput">BasicAuthConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig">AmplifyAppBasicAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.buildSpecInput">BuildSpecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.cacheConfigInput">CacheConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig">AmplifyAppCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.computeRoleArnInput">ComputeRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customHeadersInput">CustomHeadersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customRulesInput">CustomRulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules">AmplifyAppCustomRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.enableBranchAutoDeletionInput">EnableBranchAutoDeletionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables">AmplifyAppEnvironmentVariables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.iamServiceRoleInput">IamServiceRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.jobConfigInput">JobConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig">AmplifyAppJobConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.oauthTokenInput">OauthTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.platformInput">PlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags">AmplifyAppTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.accessToken">AccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.buildSpec">BuildSpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.computeRoleArn">ComputeRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customHeaders">CustomHeaders</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.enableBranchAutoDeletion">EnableBranchAutoDeletion</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.iamServiceRole">IamServiceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.oauthToken">OauthToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.repository">Repository</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.appName"></a>

```csharp
public string AppName { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AutoBranchCreationConfig`<sup>Required</sup> <a name="AutoBranchCreationConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.autoBranchCreationConfig"></a>

```csharp
public AmplifyAppAutoBranchCreationConfigOutputReference AutoBranchCreationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference">AmplifyAppAutoBranchCreationConfigOutputReference</a>

---

##### `BasicAuthConfig`<sup>Required</sup> <a name="BasicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.basicAuthConfig"></a>

```csharp
public AmplifyAppBasicAuthConfigOutputReference BasicAuthConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference">AmplifyAppBasicAuthConfigOutputReference</a>

---

##### `CacheConfig`<sup>Required</sup> <a name="CacheConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.cacheConfig"></a>

```csharp
public AmplifyAppCacheConfigOutputReference CacheConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference">AmplifyAppCacheConfigOutputReference</a>

---

##### `CustomRules`<sup>Required</sup> <a name="CustomRules" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customRules"></a>

```csharp
public AmplifyAppCustomRulesList CustomRules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList">AmplifyAppCustomRulesList</a>

---

##### `DefaultDomain`<sup>Required</sup> <a name="DefaultDomain" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.defaultDomain"></a>

```csharp
public string DefaultDomain { get; }
```

- *Type:* string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.environmentVariables"></a>

```csharp
public AmplifyAppEnvironmentVariablesList EnvironmentVariables { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList">AmplifyAppEnvironmentVariablesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `JobConfig`<sup>Required</sup> <a name="JobConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.jobConfig"></a>

```csharp
public AmplifyAppJobConfigOutputReference JobConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference">AmplifyAppJobConfigOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.tags"></a>

```csharp
public AmplifyAppTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList">AmplifyAppTagsList</a>

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.accessTokenInput"></a>

```csharp
public string AccessTokenInput { get; }
```

- *Type:* string

---

##### `AutoBranchCreationConfigInput`<sup>Optional</sup> <a name="AutoBranchCreationConfigInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.autoBranchCreationConfigInput"></a>

```csharp
public IResolvable|AmplifyAppAutoBranchCreationConfig AutoBranchCreationConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a>

---

##### `BasicAuthConfigInput`<sup>Optional</sup> <a name="BasicAuthConfigInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.basicAuthConfigInput"></a>

```csharp
public IResolvable|AmplifyAppBasicAuthConfig BasicAuthConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig">AmplifyAppBasicAuthConfig</a>

---

##### `BuildSpecInput`<sup>Optional</sup> <a name="BuildSpecInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.buildSpecInput"></a>

```csharp
public string BuildSpecInput { get; }
```

- *Type:* string

---

##### `CacheConfigInput`<sup>Optional</sup> <a name="CacheConfigInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.cacheConfigInput"></a>

```csharp
public IResolvable|AmplifyAppCacheConfig CacheConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig">AmplifyAppCacheConfig</a>

---

##### `ComputeRoleArnInput`<sup>Optional</sup> <a name="ComputeRoleArnInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.computeRoleArnInput"></a>

```csharp
public string ComputeRoleArnInput { get; }
```

- *Type:* string

---

##### `CustomHeadersInput`<sup>Optional</sup> <a name="CustomHeadersInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customHeadersInput"></a>

```csharp
public string CustomHeadersInput { get; }
```

- *Type:* string

---

##### `CustomRulesInput`<sup>Optional</sup> <a name="CustomRulesInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customRulesInput"></a>

```csharp
public IResolvable|AmplifyAppCustomRules[] CustomRulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules">AmplifyAppCustomRules</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnableBranchAutoDeletionInput`<sup>Optional</sup> <a name="EnableBranchAutoDeletionInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.enableBranchAutoDeletionInput"></a>

```csharp
public bool|IResolvable EnableBranchAutoDeletionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.environmentVariablesInput"></a>

```csharp
public IResolvable|AmplifyAppEnvironmentVariables[] EnvironmentVariablesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables">AmplifyAppEnvironmentVariables</a>[]

---

##### `IamServiceRoleInput`<sup>Optional</sup> <a name="IamServiceRoleInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.iamServiceRoleInput"></a>

```csharp
public string IamServiceRoleInput { get; }
```

- *Type:* string

---

##### `JobConfigInput`<sup>Optional</sup> <a name="JobConfigInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.jobConfigInput"></a>

```csharp
public IResolvable|AmplifyAppJobConfig JobConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig">AmplifyAppJobConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OauthTokenInput`<sup>Optional</sup> <a name="OauthTokenInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.oauthTokenInput"></a>

```csharp
public string OauthTokenInput { get; }
```

- *Type:* string

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.platformInput"></a>

```csharp
public string PlatformInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.tagsInput"></a>

```csharp
public IResolvable|AmplifyAppTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags">AmplifyAppTags</a>[]

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.accessToken"></a>

```csharp
public string AccessToken { get; }
```

- *Type:* string

---

##### `BuildSpec`<sup>Required</sup> <a name="BuildSpec" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.buildSpec"></a>

```csharp
public string BuildSpec { get; }
```

- *Type:* string

---

##### `ComputeRoleArn`<sup>Required</sup> <a name="ComputeRoleArn" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.computeRoleArn"></a>

```csharp
public string ComputeRoleArn { get; }
```

- *Type:* string

---

##### `CustomHeaders`<sup>Required</sup> <a name="CustomHeaders" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customHeaders"></a>

```csharp
public string CustomHeaders { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnableBranchAutoDeletion`<sup>Required</sup> <a name="EnableBranchAutoDeletion" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.enableBranchAutoDeletion"></a>

```csharp
public bool|IResolvable EnableBranchAutoDeletion { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IamServiceRole`<sup>Required</sup> <a name="IamServiceRole" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.iamServiceRole"></a>

```csharp
public string IamServiceRole { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OauthToken`<sup>Required</sup> <a name="OauthToken" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.oauthToken"></a>

```csharp
public string OauthToken { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AmplifyAppAutoBranchCreationConfig <a name="AmplifyAppAutoBranchCreationConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AmplifyAppAutoBranchCreationConfig {
    string[] AutoBranchCreationPatterns = null,
    AmplifyAppAutoBranchCreationConfigBasicAuthConfig BasicAuthConfig = null,
    string BuildSpec = null,
    bool|IResolvable EnableAutoBranchCreation = null,
    bool|IResolvable EnableAutoBuild = null,
    bool|IResolvable EnablePerformanceMode = null,
    bool|IResolvable EnablePullRequestPreview = null,
    IResolvable|AmplifyAppAutoBranchCreationConfigEnvironmentVariables[] EnvironmentVariables = null,
    string Framework = null,
    string PullRequestEnvironmentName = null,
    string Stage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.autoBranchCreationPatterns">AutoBranchCreationPatterns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#auto_branch_creation_patterns AmplifyApp#auto_branch_creation_patterns}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.basicAuthConfig">BasicAuthConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig">AmplifyAppAutoBranchCreationConfigBasicAuthConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#basic_auth_config AmplifyApp#basic_auth_config}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.buildSpec">BuildSpec</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#build_spec AmplifyApp#build_spec}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enableAutoBranchCreation">EnableAutoBranchCreation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#enable_auto_branch_creation AmplifyApp#enable_auto_branch_creation}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enableAutoBuild">EnableAutoBuild</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#enable_auto_build AmplifyApp#enable_auto_build}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enablePerformanceMode">EnablePerformanceMode</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#enable_performance_mode AmplifyApp#enable_performance_mode}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enablePullRequestPreview">EnablePullRequestPreview</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#enable_pull_request_preview AmplifyApp#enable_pull_request_preview}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.environmentVariables">EnvironmentVariables</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables">AmplifyAppAutoBranchCreationConfigEnvironmentVariables</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#environment_variables AmplifyApp#environment_variables}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.framework">Framework</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#framework AmplifyApp#framework}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.pullRequestEnvironmentName">PullRequestEnvironmentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#pull_request_environment_name AmplifyApp#pull_request_environment_name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.stage">Stage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#stage AmplifyApp#stage}. |

---

##### `AutoBranchCreationPatterns`<sup>Optional</sup> <a name="AutoBranchCreationPatterns" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.autoBranchCreationPatterns"></a>

```csharp
public string[] AutoBranchCreationPatterns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#auto_branch_creation_patterns AmplifyApp#auto_branch_creation_patterns}.

---

##### `BasicAuthConfig`<sup>Optional</sup> <a name="BasicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.basicAuthConfig"></a>

```csharp
public AmplifyAppAutoBranchCreationConfigBasicAuthConfig BasicAuthConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig">AmplifyAppAutoBranchCreationConfigBasicAuthConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#basic_auth_config AmplifyApp#basic_auth_config}.

---

##### `BuildSpec`<sup>Optional</sup> <a name="BuildSpec" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.buildSpec"></a>

```csharp
public string BuildSpec { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#build_spec AmplifyApp#build_spec}.

---

##### `EnableAutoBranchCreation`<sup>Optional</sup> <a name="EnableAutoBranchCreation" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enableAutoBranchCreation"></a>

```csharp
public bool|IResolvable EnableAutoBranchCreation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#enable_auto_branch_creation AmplifyApp#enable_auto_branch_creation}.

---

##### `EnableAutoBuild`<sup>Optional</sup> <a name="EnableAutoBuild" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enableAutoBuild"></a>

```csharp
public bool|IResolvable EnableAutoBuild { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#enable_auto_build AmplifyApp#enable_auto_build}.

---

##### `EnablePerformanceMode`<sup>Optional</sup> <a name="EnablePerformanceMode" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enablePerformanceMode"></a>

```csharp
public bool|IResolvable EnablePerformanceMode { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#enable_performance_mode AmplifyApp#enable_performance_mode}.

---

##### `EnablePullRequestPreview`<sup>Optional</sup> <a name="EnablePullRequestPreview" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enablePullRequestPreview"></a>

```csharp
public bool|IResolvable EnablePullRequestPreview { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#enable_pull_request_preview AmplifyApp#enable_pull_request_preview}.

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.environmentVariables"></a>

```csharp
public IResolvable|AmplifyAppAutoBranchCreationConfigEnvironmentVariables[] EnvironmentVariables { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables">AmplifyAppAutoBranchCreationConfigEnvironmentVariables</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#environment_variables AmplifyApp#environment_variables}.

---

##### `Framework`<sup>Optional</sup> <a name="Framework" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.framework"></a>

```csharp
public string Framework { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#framework AmplifyApp#framework}.

---

##### `PullRequestEnvironmentName`<sup>Optional</sup> <a name="PullRequestEnvironmentName" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.pullRequestEnvironmentName"></a>

```csharp
public string PullRequestEnvironmentName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#pull_request_environment_name AmplifyApp#pull_request_environment_name}.

---

##### `Stage`<sup>Optional</sup> <a name="Stage" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.stage"></a>

```csharp
public string Stage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#stage AmplifyApp#stage}.

---

### AmplifyAppAutoBranchCreationConfigBasicAuthConfig <a name="AmplifyAppAutoBranchCreationConfigBasicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AmplifyAppAutoBranchCreationConfigBasicAuthConfig {
    bool|IResolvable EnableBasicAuth = null,
    string Password = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig.property.enableBasicAuth">EnableBasicAuth</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#password AmplifyApp#password}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#username AmplifyApp#username}. |

---

##### `EnableBasicAuth`<sup>Optional</sup> <a name="EnableBasicAuth" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig.property.enableBasicAuth"></a>

```csharp
public bool|IResolvable EnableBasicAuth { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#password AmplifyApp#password}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#username AmplifyApp#username}.

---

### AmplifyAppAutoBranchCreationConfigEnvironmentVariables <a name="AmplifyAppAutoBranchCreationConfigEnvironmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AmplifyAppAutoBranchCreationConfigEnvironmentVariables {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#name AmplifyApp#name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#value AmplifyApp#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#name AmplifyApp#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#value AmplifyApp#value}.

---

### AmplifyAppBasicAuthConfig <a name="AmplifyAppBasicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AmplifyAppBasicAuthConfig {
    bool|IResolvable EnableBasicAuth = null,
    string Password = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig.property.enableBasicAuth">EnableBasicAuth</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#password AmplifyApp#password}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#username AmplifyApp#username}. |

---

##### `EnableBasicAuth`<sup>Optional</sup> <a name="EnableBasicAuth" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig.property.enableBasicAuth"></a>

```csharp
public bool|IResolvable EnableBasicAuth { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#password AmplifyApp#password}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#username AmplifyApp#username}.

---

### AmplifyAppCacheConfig <a name="AmplifyAppCacheConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AmplifyAppCacheConfig {
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#type AmplifyApp#type}. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#type AmplifyApp#type}.

---

### AmplifyAppConfig <a name="AmplifyAppConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AmplifyAppConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string AccessToken = null,
    AmplifyAppAutoBranchCreationConfig AutoBranchCreationConfig = null,
    AmplifyAppBasicAuthConfig BasicAuthConfig = null,
    string BuildSpec = null,
    AmplifyAppCacheConfig CacheConfig = null,
    string ComputeRoleArn = null,
    string CustomHeaders = null,
    IResolvable|AmplifyAppCustomRules[] CustomRules = null,
    string Description = null,
    bool|IResolvable EnableBranchAutoDeletion = null,
    IResolvable|AmplifyAppEnvironmentVariables[] EnvironmentVariables = null,
    string IamServiceRole = null,
    AmplifyAppJobConfig JobConfig = null,
    string OauthToken = null,
    string Platform = null,
    string Repository = null,
    IResolvable|AmplifyAppTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#name AmplifyApp#name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.accessToken">AccessToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#access_token AmplifyApp#access_token}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.autoBranchCreationConfig">AutoBranchCreationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#auto_branch_creation_config AmplifyApp#auto_branch_creation_config}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.basicAuthConfig">BasicAuthConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig">AmplifyAppBasicAuthConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#basic_auth_config AmplifyApp#basic_auth_config}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.buildSpec">BuildSpec</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#build_spec AmplifyApp#build_spec}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.cacheConfig">CacheConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig">AmplifyAppCacheConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#cache_config AmplifyApp#cache_config}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.computeRoleArn">ComputeRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#compute_role_arn AmplifyApp#compute_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.customHeaders">CustomHeaders</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#custom_headers AmplifyApp#custom_headers}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.customRules">CustomRules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules">AmplifyAppCustomRules</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#custom_rules AmplifyApp#custom_rules}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#description AmplifyApp#description}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.enableBranchAutoDeletion">EnableBranchAutoDeletion</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#enable_branch_auto_deletion AmplifyApp#enable_branch_auto_deletion}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.environmentVariables">EnvironmentVariables</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables">AmplifyAppEnvironmentVariables</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#environment_variables AmplifyApp#environment_variables}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.iamServiceRole">IamServiceRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#iam_service_role AmplifyApp#iam_service_role}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.jobConfig">JobConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig">AmplifyAppJobConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#job_config AmplifyApp#job_config}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.oauthToken">OauthToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#oauth_token AmplifyApp#oauth_token}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.platform">Platform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#platform AmplifyApp#platform}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.repository">Repository</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#repository AmplifyApp#repository}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags">AmplifyAppTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#tags AmplifyApp#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#name AmplifyApp#name}.

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.accessToken"></a>

```csharp
public string AccessToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#access_token AmplifyApp#access_token}.

---

##### `AutoBranchCreationConfig`<sup>Optional</sup> <a name="AutoBranchCreationConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.autoBranchCreationConfig"></a>

```csharp
public AmplifyAppAutoBranchCreationConfig AutoBranchCreationConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#auto_branch_creation_config AmplifyApp#auto_branch_creation_config}.

---

##### `BasicAuthConfig`<sup>Optional</sup> <a name="BasicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.basicAuthConfig"></a>

```csharp
public AmplifyAppBasicAuthConfig BasicAuthConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig">AmplifyAppBasicAuthConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#basic_auth_config AmplifyApp#basic_auth_config}.

---

##### `BuildSpec`<sup>Optional</sup> <a name="BuildSpec" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.buildSpec"></a>

```csharp
public string BuildSpec { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#build_spec AmplifyApp#build_spec}.

---

##### `CacheConfig`<sup>Optional</sup> <a name="CacheConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.cacheConfig"></a>

```csharp
public AmplifyAppCacheConfig CacheConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig">AmplifyAppCacheConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#cache_config AmplifyApp#cache_config}.

---

##### `ComputeRoleArn`<sup>Optional</sup> <a name="ComputeRoleArn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.computeRoleArn"></a>

```csharp
public string ComputeRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#compute_role_arn AmplifyApp#compute_role_arn}.

---

##### `CustomHeaders`<sup>Optional</sup> <a name="CustomHeaders" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.customHeaders"></a>

```csharp
public string CustomHeaders { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#custom_headers AmplifyApp#custom_headers}.

---

##### `CustomRules`<sup>Optional</sup> <a name="CustomRules" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.customRules"></a>

```csharp
public IResolvable|AmplifyAppCustomRules[] CustomRules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules">AmplifyAppCustomRules</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#custom_rules AmplifyApp#custom_rules}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#description AmplifyApp#description}.

---

##### `EnableBranchAutoDeletion`<sup>Optional</sup> <a name="EnableBranchAutoDeletion" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.enableBranchAutoDeletion"></a>

```csharp
public bool|IResolvable EnableBranchAutoDeletion { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#enable_branch_auto_deletion AmplifyApp#enable_branch_auto_deletion}.

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.environmentVariables"></a>

```csharp
public IResolvable|AmplifyAppEnvironmentVariables[] EnvironmentVariables { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables">AmplifyAppEnvironmentVariables</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#environment_variables AmplifyApp#environment_variables}.

---

##### `IamServiceRole`<sup>Optional</sup> <a name="IamServiceRole" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.iamServiceRole"></a>

```csharp
public string IamServiceRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#iam_service_role AmplifyApp#iam_service_role}.

---

##### `JobConfig`<sup>Optional</sup> <a name="JobConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.jobConfig"></a>

```csharp
public AmplifyAppJobConfig JobConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig">AmplifyAppJobConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#job_config AmplifyApp#job_config}.

---

##### `OauthToken`<sup>Optional</sup> <a name="OauthToken" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.oauthToken"></a>

```csharp
public string OauthToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#oauth_token AmplifyApp#oauth_token}.

---

##### `Platform`<sup>Optional</sup> <a name="Platform" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.platform"></a>

```csharp
public string Platform { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#platform AmplifyApp#platform}.

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#repository AmplifyApp#repository}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.tags"></a>

```csharp
public IResolvable|AmplifyAppTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags">AmplifyAppTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#tags AmplifyApp#tags}.

---

### AmplifyAppCustomRules <a name="AmplifyAppCustomRules" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AmplifyAppCustomRules {
    string Condition = null,
    string Source = null,
    string Status = null,
    string Target = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.condition">Condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#condition AmplifyApp#condition}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#source AmplifyApp#source}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#status AmplifyApp#status}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.target">Target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#target AmplifyApp#target}. |

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.condition"></a>

```csharp
public string Condition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#condition AmplifyApp#condition}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#source AmplifyApp#source}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#status AmplifyApp#status}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#target AmplifyApp#target}.

---

### AmplifyAppEnvironmentVariables <a name="AmplifyAppEnvironmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AmplifyAppEnvironmentVariables {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#name AmplifyApp#name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#value AmplifyApp#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#name AmplifyApp#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#value AmplifyApp#value}.

---

### AmplifyAppJobConfig <a name="AmplifyAppJobConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AmplifyAppJobConfig {
    string BuildComputeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig.property.buildComputeType">BuildComputeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#build_compute_type AmplifyApp#build_compute_type}. |

---

##### `BuildComputeType`<sup>Optional</sup> <a name="BuildComputeType" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig.property.buildComputeType"></a>

```csharp
public string BuildComputeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#build_compute_type AmplifyApp#build_compute_type}.

---

### AmplifyAppTags <a name="AmplifyAppTags" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AmplifyAppTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#key AmplifyApp#key}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#value AmplifyApp#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#key AmplifyApp#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_app#value AmplifyApp#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference <a name="AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resetEnableBasicAuth">ResetEnableBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableBasicAuth` <a name="ResetEnableBasicAuth" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resetEnableBasicAuth"></a>

```csharp
private void ResetEnableBasicAuth()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.enableBasicAuthInput">EnableBasicAuthInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.enableBasicAuth">EnableBasicAuth</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig">AmplifyAppAutoBranchCreationConfigBasicAuthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableBasicAuthInput`<sup>Optional</sup> <a name="EnableBasicAuthInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.enableBasicAuthInput"></a>

```csharp
public bool|IResolvable EnableBasicAuthInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `EnableBasicAuth`<sup>Required</sup> <a name="EnableBasicAuth" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.enableBasicAuth"></a>

```csharp
public bool|IResolvable EnableBasicAuth { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AmplifyAppAutoBranchCreationConfigBasicAuthConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig">AmplifyAppAutoBranchCreationConfigBasicAuthConfig</a>

---


### AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList <a name="AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.get"></a>

```csharp
private AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables">AmplifyAppAutoBranchCreationConfigEnvironmentVariables</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.internalValue"></a>

```csharp
public IResolvable|AmplifyAppAutoBranchCreationConfigEnvironmentVariables[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables">AmplifyAppAutoBranchCreationConfigEnvironmentVariables</a>[]

---


### AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference <a name="AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables">AmplifyAppAutoBranchCreationConfigEnvironmentVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AmplifyAppAutoBranchCreationConfigEnvironmentVariables InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables">AmplifyAppAutoBranchCreationConfigEnvironmentVariables</a>

---


### AmplifyAppAutoBranchCreationConfigOutputReference <a name="AmplifyAppAutoBranchCreationConfigOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AmplifyAppAutoBranchCreationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.putBasicAuthConfig">PutBasicAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.putEnvironmentVariables">PutEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetAutoBranchCreationPatterns">ResetAutoBranchCreationPatterns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetBasicAuthConfig">ResetBasicAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetBuildSpec">ResetBuildSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnableAutoBranchCreation">ResetEnableAutoBranchCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnableAutoBuild">ResetEnableAutoBuild</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnablePerformanceMode">ResetEnablePerformanceMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnablePullRequestPreview">ResetEnablePullRequestPreview</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetFramework">ResetFramework</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetPullRequestEnvironmentName">ResetPullRequestEnvironmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetStage">ResetStage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBasicAuthConfig` <a name="PutBasicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.putBasicAuthConfig"></a>

```csharp
private void PutBasicAuthConfig(AmplifyAppAutoBranchCreationConfigBasicAuthConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.putBasicAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig">AmplifyAppAutoBranchCreationConfigBasicAuthConfig</a>

---

##### `PutEnvironmentVariables` <a name="PutEnvironmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.putEnvironmentVariables"></a>

```csharp
private void PutEnvironmentVariables(IResolvable|AmplifyAppAutoBranchCreationConfigEnvironmentVariables[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.putEnvironmentVariables.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables">AmplifyAppAutoBranchCreationConfigEnvironmentVariables</a>[]

---

##### `ResetAutoBranchCreationPatterns` <a name="ResetAutoBranchCreationPatterns" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetAutoBranchCreationPatterns"></a>

```csharp
private void ResetAutoBranchCreationPatterns()
```

##### `ResetBasicAuthConfig` <a name="ResetBasicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetBasicAuthConfig"></a>

```csharp
private void ResetBasicAuthConfig()
```

##### `ResetBuildSpec` <a name="ResetBuildSpec" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetBuildSpec"></a>

```csharp
private void ResetBuildSpec()
```

##### `ResetEnableAutoBranchCreation` <a name="ResetEnableAutoBranchCreation" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnableAutoBranchCreation"></a>

```csharp
private void ResetEnableAutoBranchCreation()
```

##### `ResetEnableAutoBuild` <a name="ResetEnableAutoBuild" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnableAutoBuild"></a>

```csharp
private void ResetEnableAutoBuild()
```

##### `ResetEnablePerformanceMode` <a name="ResetEnablePerformanceMode" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnablePerformanceMode"></a>

```csharp
private void ResetEnablePerformanceMode()
```

##### `ResetEnablePullRequestPreview` <a name="ResetEnablePullRequestPreview" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnablePullRequestPreview"></a>

```csharp
private void ResetEnablePullRequestPreview()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnvironmentVariables"></a>

```csharp
private void ResetEnvironmentVariables()
```

##### `ResetFramework` <a name="ResetFramework" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetFramework"></a>

```csharp
private void ResetFramework()
```

##### `ResetPullRequestEnvironmentName` <a name="ResetPullRequestEnvironmentName" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetPullRequestEnvironmentName"></a>

```csharp
private void ResetPullRequestEnvironmentName()
```

##### `ResetStage` <a name="ResetStage" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetStage"></a>

```csharp
private void ResetStage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthConfig">BasicAuthConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference">AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList">AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.autoBranchCreationPatternsInput">AutoBranchCreationPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthConfigInput">BasicAuthConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig">AmplifyAppAutoBranchCreationConfigBasicAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpecInput">BuildSpecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBranchCreationInput">EnableAutoBranchCreationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuildInput">EnableAutoBuildInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceModeInput">EnablePerformanceModeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreviewInput">EnablePullRequestPreviewInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables">AmplifyAppAutoBranchCreationConfigEnvironmentVariables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.frameworkInput">FrameworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentNameInput">PullRequestEnvironmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.stageInput">StageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.autoBranchCreationPatterns">AutoBranchCreationPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpec">BuildSpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBranchCreation">EnableAutoBranchCreation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuild">EnableAutoBuild</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceMode">EnablePerformanceMode</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreview">EnablePullRequestPreview</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.framework">Framework</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentName">PullRequestEnvironmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.stage">Stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BasicAuthConfig`<sup>Required</sup> <a name="BasicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthConfig"></a>

```csharp
public AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference BasicAuthConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference">AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference</a>

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariables"></a>

```csharp
public AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList EnvironmentVariables { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList">AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList</a>

---

##### `AutoBranchCreationPatternsInput`<sup>Optional</sup> <a name="AutoBranchCreationPatternsInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.autoBranchCreationPatternsInput"></a>

```csharp
public string[] AutoBranchCreationPatternsInput { get; }
```

- *Type:* string[]

---

##### `BasicAuthConfigInput`<sup>Optional</sup> <a name="BasicAuthConfigInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthConfigInput"></a>

```csharp
public IResolvable|AmplifyAppAutoBranchCreationConfigBasicAuthConfig BasicAuthConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig">AmplifyAppAutoBranchCreationConfigBasicAuthConfig</a>

---

##### `BuildSpecInput`<sup>Optional</sup> <a name="BuildSpecInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpecInput"></a>

```csharp
public string BuildSpecInput { get; }
```

- *Type:* string

---

##### `EnableAutoBranchCreationInput`<sup>Optional</sup> <a name="EnableAutoBranchCreationInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBranchCreationInput"></a>

```csharp
public bool|IResolvable EnableAutoBranchCreationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableAutoBuildInput`<sup>Optional</sup> <a name="EnableAutoBuildInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuildInput"></a>

```csharp
public bool|IResolvable EnableAutoBuildInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnablePerformanceModeInput`<sup>Optional</sup> <a name="EnablePerformanceModeInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceModeInput"></a>

```csharp
public bool|IResolvable EnablePerformanceModeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnablePullRequestPreviewInput`<sup>Optional</sup> <a name="EnablePullRequestPreviewInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreviewInput"></a>

```csharp
public bool|IResolvable EnablePullRequestPreviewInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariablesInput"></a>

```csharp
public IResolvable|AmplifyAppAutoBranchCreationConfigEnvironmentVariables[] EnvironmentVariablesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables">AmplifyAppAutoBranchCreationConfigEnvironmentVariables</a>[]

---

##### `FrameworkInput`<sup>Optional</sup> <a name="FrameworkInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.frameworkInput"></a>

```csharp
public string FrameworkInput { get; }
```

- *Type:* string

---

##### `PullRequestEnvironmentNameInput`<sup>Optional</sup> <a name="PullRequestEnvironmentNameInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentNameInput"></a>

```csharp
public string PullRequestEnvironmentNameInput { get; }
```

- *Type:* string

---

##### `StageInput`<sup>Optional</sup> <a name="StageInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.stageInput"></a>

```csharp
public string StageInput { get; }
```

- *Type:* string

---

##### `AutoBranchCreationPatterns`<sup>Required</sup> <a name="AutoBranchCreationPatterns" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.autoBranchCreationPatterns"></a>

```csharp
public string[] AutoBranchCreationPatterns { get; }
```

- *Type:* string[]

---

##### `BuildSpec`<sup>Required</sup> <a name="BuildSpec" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpec"></a>

```csharp
public string BuildSpec { get; }
```

- *Type:* string

---

##### `EnableAutoBranchCreation`<sup>Required</sup> <a name="EnableAutoBranchCreation" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBranchCreation"></a>

```csharp
public bool|IResolvable EnableAutoBranchCreation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableAutoBuild`<sup>Required</sup> <a name="EnableAutoBuild" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuild"></a>

```csharp
public bool|IResolvable EnableAutoBuild { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnablePerformanceMode`<sup>Required</sup> <a name="EnablePerformanceMode" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceMode"></a>

```csharp
public bool|IResolvable EnablePerformanceMode { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnablePullRequestPreview`<sup>Required</sup> <a name="EnablePullRequestPreview" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreview"></a>

```csharp
public bool|IResolvable EnablePullRequestPreview { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.framework"></a>

```csharp
public string Framework { get; }
```

- *Type:* string

---

##### `PullRequestEnvironmentName`<sup>Required</sup> <a name="PullRequestEnvironmentName" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentName"></a>

```csharp
public string PullRequestEnvironmentName { get; }
```

- *Type:* string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.stage"></a>

```csharp
public string Stage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AmplifyAppAutoBranchCreationConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a>

---


### AmplifyAppBasicAuthConfigOutputReference <a name="AmplifyAppBasicAuthConfigOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AmplifyAppBasicAuthConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resetEnableBasicAuth">ResetEnableBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableBasicAuth` <a name="ResetEnableBasicAuth" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resetEnableBasicAuth"></a>

```csharp
private void ResetEnableBasicAuth()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.enableBasicAuthInput">EnableBasicAuthInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.enableBasicAuth">EnableBasicAuth</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig">AmplifyAppBasicAuthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableBasicAuthInput`<sup>Optional</sup> <a name="EnableBasicAuthInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.enableBasicAuthInput"></a>

```csharp
public bool|IResolvable EnableBasicAuthInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `EnableBasicAuth`<sup>Required</sup> <a name="EnableBasicAuth" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.enableBasicAuth"></a>

```csharp
public bool|IResolvable EnableBasicAuth { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AmplifyAppBasicAuthConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig">AmplifyAppBasicAuthConfig</a>

---


### AmplifyAppCacheConfigOutputReference <a name="AmplifyAppCacheConfigOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AmplifyAppCacheConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig">AmplifyAppCacheConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AmplifyAppCacheConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig">AmplifyAppCacheConfig</a>

---


### AmplifyAppCustomRulesList <a name="AmplifyAppCustomRulesList" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AmplifyAppCustomRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.get"></a>

```csharp
private AmplifyAppCustomRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules">AmplifyAppCustomRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.property.internalValue"></a>

```csharp
public IResolvable|AmplifyAppCustomRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules">AmplifyAppCustomRules</a>[]

---


### AmplifyAppCustomRulesOutputReference <a name="AmplifyAppCustomRulesOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AmplifyAppCustomRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.conditionInput">ConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules">AmplifyAppCustomRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.conditionInput"></a>

```csharp
public string ConditionInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AmplifyAppCustomRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules">AmplifyAppCustomRules</a>

---


### AmplifyAppEnvironmentVariablesList <a name="AmplifyAppEnvironmentVariablesList" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AmplifyAppEnvironmentVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.get"></a>

```csharp
private AmplifyAppEnvironmentVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables">AmplifyAppEnvironmentVariables</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.property.internalValue"></a>

```csharp
public IResolvable|AmplifyAppEnvironmentVariables[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables">AmplifyAppEnvironmentVariables</a>[]

---


### AmplifyAppEnvironmentVariablesOutputReference <a name="AmplifyAppEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AmplifyAppEnvironmentVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables">AmplifyAppEnvironmentVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AmplifyAppEnvironmentVariables InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables">AmplifyAppEnvironmentVariables</a>

---


### AmplifyAppJobConfigOutputReference <a name="AmplifyAppJobConfigOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AmplifyAppJobConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.resetBuildComputeType">ResetBuildComputeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBuildComputeType` <a name="ResetBuildComputeType" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.resetBuildComputeType"></a>

```csharp
private void ResetBuildComputeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.buildComputeTypeInput">BuildComputeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.buildComputeType">BuildComputeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig">AmplifyAppJobConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BuildComputeTypeInput`<sup>Optional</sup> <a name="BuildComputeTypeInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.buildComputeTypeInput"></a>

```csharp
public string BuildComputeTypeInput { get; }
```

- *Type:* string

---

##### `BuildComputeType`<sup>Required</sup> <a name="BuildComputeType" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.buildComputeType"></a>

```csharp
public string BuildComputeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AmplifyAppJobConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig">AmplifyAppJobConfig</a>

---


### AmplifyAppTagsList <a name="AmplifyAppTagsList" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AmplifyAppTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.get"></a>

```csharp
private AmplifyAppTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags">AmplifyAppTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.property.internalValue"></a>

```csharp
public IResolvable|AmplifyAppTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags">AmplifyAppTags</a>[]

---


### AmplifyAppTagsOutputReference <a name="AmplifyAppTagsOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AmplifyAppTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags">AmplifyAppTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AmplifyAppTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags">AmplifyAppTags</a>

---



