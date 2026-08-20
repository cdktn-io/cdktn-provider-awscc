# `appsyncGraphQlApi` Submodule <a name="`appsyncGraphQlApi` Submodule" id="@cdktn/provider-awscc.appsyncGraphQlApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncGraphQlApi <a name="AppsyncGraphQlApi" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api awscc_appsync_graph_ql_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncGraphQlApi(Construct Scope, string Id, AppsyncGraphQlApiConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig">AppsyncGraphQlApiConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig">AppsyncGraphQlApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putAdditionalAuthenticationProviders">PutAdditionalAuthenticationProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putEnhancedMetricsConfig">PutEnhancedMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLambdaAuthorizerConfig">PutLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putOpenIdConnectConfig">PutOpenIdConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putUserPoolConfig">PutUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetAdditionalAuthenticationProviders">ResetAdditionalAuthenticationProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetApiType">ResetApiType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetEnhancedMetricsConfig">ResetEnhancedMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetIntrospectionConfig">ResetIntrospectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetLambdaAuthorizerConfig">ResetLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetLogConfig">ResetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetMergedApiExecutionRoleArn">ResetMergedApiExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetOpenIdConnectConfig">ResetOpenIdConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetOwnerContact">ResetOwnerContact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetQueryDepthLimit">ResetQueryDepthLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetResolverCountLimit">ResetResolverCountLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetUserPoolConfig">ResetUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetVisibility">ResetVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetXrayEnabled">ResetXrayEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdditionalAuthenticationProviders` <a name="PutAdditionalAuthenticationProviders" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putAdditionalAuthenticationProviders"></a>

```csharp
private void PutAdditionalAuthenticationProviders(IResolvable|AppsyncGraphQlApiAdditionalAuthenticationProviders[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putAdditionalAuthenticationProviders.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>[]

---

##### `PutEnhancedMetricsConfig` <a name="PutEnhancedMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putEnhancedMetricsConfig"></a>

```csharp
private void PutEnhancedMetricsConfig(AppsyncGraphQlApiEnhancedMetricsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putEnhancedMetricsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a>

---

##### `PutLambdaAuthorizerConfig` <a name="PutLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLambdaAuthorizerConfig"></a>

```csharp
private void PutLambdaAuthorizerConfig(AppsyncGraphQlApiLambdaAuthorizerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLambdaAuthorizerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a>

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLogConfig"></a>

```csharp
private void PutLogConfig(AppsyncGraphQlApiLogConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a>

---

##### `PutOpenIdConnectConfig` <a name="PutOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putOpenIdConnectConfig"></a>

```csharp
private void PutOpenIdConnectConfig(AppsyncGraphQlApiOpenIdConnectConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putOpenIdConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putTags"></a>

```csharp
private void PutTags(IResolvable|AppsyncGraphQlApiTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>[]

---

##### `PutUserPoolConfig` <a name="PutUserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putUserPoolConfig"></a>

```csharp
private void PutUserPoolConfig(AppsyncGraphQlApiUserPoolConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putUserPoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a>

---

##### `ResetAdditionalAuthenticationProviders` <a name="ResetAdditionalAuthenticationProviders" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetAdditionalAuthenticationProviders"></a>

```csharp
private void ResetAdditionalAuthenticationProviders()
```

##### `ResetApiType` <a name="ResetApiType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetApiType"></a>

```csharp
private void ResetApiType()
```

##### `ResetEnhancedMetricsConfig` <a name="ResetEnhancedMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetEnhancedMetricsConfig"></a>

```csharp
private void ResetEnhancedMetricsConfig()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetEnvironmentVariables"></a>

```csharp
private void ResetEnvironmentVariables()
```

##### `ResetIntrospectionConfig` <a name="ResetIntrospectionConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetIntrospectionConfig"></a>

```csharp
private void ResetIntrospectionConfig()
```

##### `ResetLambdaAuthorizerConfig` <a name="ResetLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetLambdaAuthorizerConfig"></a>

```csharp
private void ResetLambdaAuthorizerConfig()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetLogConfig"></a>

```csharp
private void ResetLogConfig()
```

##### `ResetMergedApiExecutionRoleArn` <a name="ResetMergedApiExecutionRoleArn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetMergedApiExecutionRoleArn"></a>

```csharp
private void ResetMergedApiExecutionRoleArn()
```

##### `ResetOpenIdConnectConfig` <a name="ResetOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetOpenIdConnectConfig"></a>

```csharp
private void ResetOpenIdConnectConfig()
```

##### `ResetOwnerContact` <a name="ResetOwnerContact" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetOwnerContact"></a>

```csharp
private void ResetOwnerContact()
```

##### `ResetQueryDepthLimit` <a name="ResetQueryDepthLimit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetQueryDepthLimit"></a>

```csharp
private void ResetQueryDepthLimit()
```

##### `ResetResolverCountLimit` <a name="ResetResolverCountLimit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetResolverCountLimit"></a>

```csharp
private void ResetResolverCountLimit()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetUserPoolConfig` <a name="ResetUserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetUserPoolConfig"></a>

```csharp
private void ResetUserPoolConfig()
```

##### `ResetVisibility` <a name="ResetVisibility" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetVisibility"></a>

```csharp
private void ResetVisibility()
```

##### `ResetXrayEnabled` <a name="ResetXrayEnabled" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetXrayEnabled"></a>

```csharp
private void ResetXrayEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppsyncGraphQlApi resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppsyncGraphQlApi.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppsyncGraphQlApi.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppsyncGraphQlApi.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppsyncGraphQlApi.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AppsyncGraphQlApi resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppsyncGraphQlApi to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppsyncGraphQlApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AppsyncGraphQlApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.additionalAuthenticationProviders">AdditionalAuthenticationProviders</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList">AppsyncGraphQlApiAdditionalAuthenticationProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.apiId">ApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.enhancedMetricsConfig">EnhancedMetricsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference">AppsyncGraphQlApiEnhancedMetricsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.graphQlDns">GraphQlDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.graphQlEndpointArn">GraphQlEndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.graphQlUrl">GraphQlUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.lambdaAuthorizerConfig">LambdaAuthorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference">AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference">AppsyncGraphQlApiLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.openIdConnectConfig">OpenIdConnectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference">AppsyncGraphQlApiOpenIdConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.realtimeDns">RealtimeDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.realtimeUrl">RealtimeUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList">AppsyncGraphQlApiTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.userPoolConfig">UserPoolConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference">AppsyncGraphQlApiUserPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.additionalAuthenticationProvidersInput">AdditionalAuthenticationProvidersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.apiTypeInput">ApiTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.enhancedMetricsConfigInput">EnhancedMetricsConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.introspectionConfigInput">IntrospectionConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.lambdaAuthorizerConfigInput">LambdaAuthorizerConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.logConfigInput">LogConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.mergedApiExecutionRoleArnInput">MergedApiExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.openIdConnectConfigInput">OpenIdConnectConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.ownerContactInput">OwnerContactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.queryDepthLimitInput">QueryDepthLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.resolverCountLimitInput">ResolverCountLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.userPoolConfigInput">UserPoolConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.visibilityInput">VisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.xrayEnabledInput">XrayEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.apiType">ApiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.introspectionConfig">IntrospectionConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.mergedApiExecutionRoleArn">MergedApiExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.ownerContact">OwnerContact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.queryDepthLimit">QueryDepthLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.resolverCountLimit">ResolverCountLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.xrayEnabled">XrayEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AdditionalAuthenticationProviders`<sup>Required</sup> <a name="AdditionalAuthenticationProviders" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.additionalAuthenticationProviders"></a>

```csharp
public AppsyncGraphQlApiAdditionalAuthenticationProvidersList AdditionalAuthenticationProviders { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList">AppsyncGraphQlApiAdditionalAuthenticationProvidersList</a>

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.apiId"></a>

```csharp
public string ApiId { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `EnhancedMetricsConfig`<sup>Required</sup> <a name="EnhancedMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.enhancedMetricsConfig"></a>

```csharp
public AppsyncGraphQlApiEnhancedMetricsConfigOutputReference EnhancedMetricsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference">AppsyncGraphQlApiEnhancedMetricsConfigOutputReference</a>

---

##### `GraphQlDns`<sup>Required</sup> <a name="GraphQlDns" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.graphQlDns"></a>

```csharp
public string GraphQlDns { get; }
```

- *Type:* string

---

##### `GraphQlEndpointArn`<sup>Required</sup> <a name="GraphQlEndpointArn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.graphQlEndpointArn"></a>

```csharp
public string GraphQlEndpointArn { get; }
```

- *Type:* string

---

##### `GraphQlUrl`<sup>Required</sup> <a name="GraphQlUrl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.graphQlUrl"></a>

```csharp
public string GraphQlUrl { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LambdaAuthorizerConfig`<sup>Required</sup> <a name="LambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.lambdaAuthorizerConfig"></a>

```csharp
public AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference LambdaAuthorizerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference">AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference</a>

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.logConfig"></a>

```csharp
public AppsyncGraphQlApiLogConfigOutputReference LogConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference">AppsyncGraphQlApiLogConfigOutputReference</a>

---

##### `OpenIdConnectConfig`<sup>Required</sup> <a name="OpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.openIdConnectConfig"></a>

```csharp
public AppsyncGraphQlApiOpenIdConnectConfigOutputReference OpenIdConnectConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference">AppsyncGraphQlApiOpenIdConnectConfigOutputReference</a>

---

##### `RealtimeDns`<sup>Required</sup> <a name="RealtimeDns" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.realtimeDns"></a>

```csharp
public string RealtimeDns { get; }
```

- *Type:* string

---

##### `RealtimeUrl`<sup>Required</sup> <a name="RealtimeUrl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.realtimeUrl"></a>

```csharp
public string RealtimeUrl { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.tags"></a>

```csharp
public AppsyncGraphQlApiTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList">AppsyncGraphQlApiTagsList</a>

---

##### `UserPoolConfig`<sup>Required</sup> <a name="UserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.userPoolConfig"></a>

```csharp
public AppsyncGraphQlApiUserPoolConfigOutputReference UserPoolConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference">AppsyncGraphQlApiUserPoolConfigOutputReference</a>

---

##### `AdditionalAuthenticationProvidersInput`<sup>Optional</sup> <a name="AdditionalAuthenticationProvidersInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.additionalAuthenticationProvidersInput"></a>

```csharp
public IResolvable|AppsyncGraphQlApiAdditionalAuthenticationProviders[] AdditionalAuthenticationProvidersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>[]

---

##### `ApiTypeInput`<sup>Optional</sup> <a name="ApiTypeInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.apiTypeInput"></a>

```csharp
public string ApiTypeInput { get; }
```

- *Type:* string

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.authenticationTypeInput"></a>

```csharp
public string AuthenticationTypeInput { get; }
```

- *Type:* string

---

##### `EnhancedMetricsConfigInput`<sup>Optional</sup> <a name="EnhancedMetricsConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.enhancedMetricsConfigInput"></a>

```csharp
public IResolvable|AppsyncGraphQlApiEnhancedMetricsConfig EnhancedMetricsConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a>

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.environmentVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IntrospectionConfigInput`<sup>Optional</sup> <a name="IntrospectionConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.introspectionConfigInput"></a>

```csharp
public string IntrospectionConfigInput { get; }
```

- *Type:* string

---

##### `LambdaAuthorizerConfigInput`<sup>Optional</sup> <a name="LambdaAuthorizerConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.lambdaAuthorizerConfigInput"></a>

```csharp
public IResolvable|AppsyncGraphQlApiLambdaAuthorizerConfig LambdaAuthorizerConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a>

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.logConfigInput"></a>

```csharp
public IResolvable|AppsyncGraphQlApiLogConfig LogConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a>

---

##### `MergedApiExecutionRoleArnInput`<sup>Optional</sup> <a name="MergedApiExecutionRoleArnInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.mergedApiExecutionRoleArnInput"></a>

```csharp
public string MergedApiExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OpenIdConnectConfigInput`<sup>Optional</sup> <a name="OpenIdConnectConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.openIdConnectConfigInput"></a>

```csharp
public IResolvable|AppsyncGraphQlApiOpenIdConnectConfig OpenIdConnectConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a>

---

##### `OwnerContactInput`<sup>Optional</sup> <a name="OwnerContactInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.ownerContactInput"></a>

```csharp
public string OwnerContactInput { get; }
```

- *Type:* string

---

##### `QueryDepthLimitInput`<sup>Optional</sup> <a name="QueryDepthLimitInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.queryDepthLimitInput"></a>

```csharp
public double QueryDepthLimitInput { get; }
```

- *Type:* double

---

##### `ResolverCountLimitInput`<sup>Optional</sup> <a name="ResolverCountLimitInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.resolverCountLimitInput"></a>

```csharp
public double ResolverCountLimitInput { get; }
```

- *Type:* double

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.tagsInput"></a>

```csharp
public IResolvable|AppsyncGraphQlApiTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>[]

---

##### `UserPoolConfigInput`<sup>Optional</sup> <a name="UserPoolConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.userPoolConfigInput"></a>

```csharp
public IResolvable|AppsyncGraphQlApiUserPoolConfig UserPoolConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a>

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.visibilityInput"></a>

```csharp
public string VisibilityInput { get; }
```

- *Type:* string

---

##### `XrayEnabledInput`<sup>Optional</sup> <a name="XrayEnabledInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.xrayEnabledInput"></a>

```csharp
public bool|IResolvable XrayEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ApiType`<sup>Required</sup> <a name="ApiType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.apiType"></a>

```csharp
public string ApiType { get; }
```

- *Type:* string

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; }
```

- *Type:* string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IntrospectionConfig`<sup>Required</sup> <a name="IntrospectionConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.introspectionConfig"></a>

```csharp
public string IntrospectionConfig { get; }
```

- *Type:* string

---

##### `MergedApiExecutionRoleArn`<sup>Required</sup> <a name="MergedApiExecutionRoleArn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.mergedApiExecutionRoleArn"></a>

```csharp
public string MergedApiExecutionRoleArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OwnerContact`<sup>Required</sup> <a name="OwnerContact" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.ownerContact"></a>

```csharp
public string OwnerContact { get; }
```

- *Type:* string

---

##### `QueryDepthLimit`<sup>Required</sup> <a name="QueryDepthLimit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.queryDepthLimit"></a>

```csharp
public double QueryDepthLimit { get; }
```

- *Type:* double

---

##### `ResolverCountLimit`<sup>Required</sup> <a name="ResolverCountLimit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.resolverCountLimit"></a>

```csharp
public double ResolverCountLimit { get; }
```

- *Type:* double

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

##### `XrayEnabled`<sup>Required</sup> <a name="XrayEnabled" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.xrayEnabled"></a>

```csharp
public bool|IResolvable XrayEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncGraphQlApiAdditionalAuthenticationProviders <a name="AppsyncGraphQlApiAdditionalAuthenticationProviders" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncGraphQlApiAdditionalAuthenticationProviders {
    string AuthenticationType = null,
    AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig LambdaAuthorizerConfig = null,
    AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig OpenIdConnectConfig = null,
    AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig UserPoolConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | The authentication type for API key, AWS Identity and Access Management, OIDC, Amazon Cognito user pools, or AWS Lambda. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.lambdaAuthorizerConfig">LambdaAuthorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#lambda_authorizer_config AppsyncGraphQlApi#lambda_authorizer_config}. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.openIdConnectConfig">OpenIdConnectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#open_id_connect_config AppsyncGraphQlApi#open_id_connect_config}. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.userPoolConfig">UserPoolConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#user_pool_config AppsyncGraphQlApi#user_pool_config}. |

---

##### `AuthenticationType`<sup>Optional</sup> <a name="AuthenticationType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; set; }
```

- *Type:* string

The authentication type for API key, AWS Identity and Access Management, OIDC, Amazon Cognito user pools, or AWS Lambda.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#authentication_type AppsyncGraphQlApi#authentication_type}

---

##### `LambdaAuthorizerConfig`<sup>Optional</sup> <a name="LambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.lambdaAuthorizerConfig"></a>

```csharp
public AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig LambdaAuthorizerConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#lambda_authorizer_config AppsyncGraphQlApi#lambda_authorizer_config}.

---

##### `OpenIdConnectConfig`<sup>Optional</sup> <a name="OpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.openIdConnectConfig"></a>

```csharp
public AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig OpenIdConnectConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#open_id_connect_config AppsyncGraphQlApi#open_id_connect_config}.

---

##### `UserPoolConfig`<sup>Optional</sup> <a name="UserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.userPoolConfig"></a>

```csharp
public AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig UserPoolConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#user_pool_config AppsyncGraphQlApi#user_pool_config}.

---

### AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig {
    double AuthorizerResultTtlInSeconds = null,
    string AuthorizerUri = null,
    string IdentityValidationExpression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds">AuthorizerResultTtlInSeconds</a></code> | <code>double</code> | The number of seconds a response should be cached for. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.property.authorizerUri">AuthorizerUri</a></code> | <code>string</code> | The ARN of the Lambda function to be called for authorization. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.property.identityValidationExpression">IdentityValidationExpression</a></code> | <code>string</code> | A regular expression for validation of tokens before the Lambda function is called. |

---

##### `AuthorizerResultTtlInSeconds`<sup>Optional</sup> <a name="AuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```csharp
public double AuthorizerResultTtlInSeconds { get; set; }
```

- *Type:* double

The number of seconds a response should be cached for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#authorizer_result_ttl_in_seconds AppsyncGraphQlApi#authorizer_result_ttl_in_seconds}

---

##### `AuthorizerUri`<sup>Optional</sup> <a name="AuthorizerUri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.property.authorizerUri"></a>

```csharp
public string AuthorizerUri { get; set; }
```

- *Type:* string

The ARN of the Lambda function to be called for authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#authorizer_uri AppsyncGraphQlApi#authorizer_uri}

---

##### `IdentityValidationExpression`<sup>Optional</sup> <a name="IdentityValidationExpression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.property.identityValidationExpression"></a>

```csharp
public string IdentityValidationExpression { get; set; }
```

- *Type:* string

A regular expression for validation of tokens before the Lambda function is called.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#identity_validation_expression AppsyncGraphQlApi#identity_validation_expression}

---

### AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig {
    double AuthTtl = null,
    string ClientId = null,
    double IatTtl = null,
    string Issuer = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.authTtl">AuthTtl</a></code> | <code>double</code> | The number of milliseconds that a token is valid after being authenticated. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.clientId">ClientId</a></code> | <code>string</code> | The client identifier of the Relying party at the OpenID identity provider. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.iatTtl">IatTtl</a></code> | <code>double</code> | The number of milliseconds that a token is valid after it's issued to a user. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.issuer">Issuer</a></code> | <code>string</code> | The issuer for the OIDC configuration. |

---

##### `AuthTtl`<sup>Optional</sup> <a name="AuthTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.authTtl"></a>

```csharp
public double AuthTtl { get; set; }
```

- *Type:* double

The number of milliseconds that a token is valid after being authenticated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#auth_ttl AppsyncGraphQlApi#auth_ttl}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The client identifier of the Relying party at the OpenID identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#client_id AppsyncGraphQlApi#client_id}

---

##### `IatTtl`<sup>Optional</sup> <a name="IatTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.iatTtl"></a>

```csharp
public double IatTtl { get; set; }
```

- *Type:* double

The number of milliseconds that a token is valid after it's issued to a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#iat_ttl AppsyncGraphQlApi#iat_ttl}

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

The issuer for the OIDC configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#issuer AppsyncGraphQlApi#issuer}

---

### AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig {
    string AppIdClientRegex = null,
    string AwsRegion = null,
    string UserPoolId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.property.appIdClientRegex">AppIdClientRegex</a></code> | <code>string</code> | A regular expression for validating the incoming Amazon Cognito user pool app client ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.property.awsRegion">AwsRegion</a></code> | <code>string</code> | The AWS Region in which the user pool was created. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.property.userPoolId">UserPoolId</a></code> | <code>string</code> | The user pool ID. |

---

##### `AppIdClientRegex`<sup>Optional</sup> <a name="AppIdClientRegex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.property.appIdClientRegex"></a>

```csharp
public string AppIdClientRegex { get; set; }
```

- *Type:* string

A regular expression for validating the incoming Amazon Cognito user pool app client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#app_id_client_regex AppsyncGraphQlApi#app_id_client_regex}

---

##### `AwsRegion`<sup>Optional</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.property.awsRegion"></a>

```csharp
public string AwsRegion { get; set; }
```

- *Type:* string

The AWS Region in which the user pool was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#aws_region AppsyncGraphQlApi#aws_region}

---

##### `UserPoolId`<sup>Optional</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.property.userPoolId"></a>

```csharp
public string UserPoolId { get; set; }
```

- *Type:* string

The user pool ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#user_pool_id AppsyncGraphQlApi#user_pool_id}

---

### AppsyncGraphQlApiConfig <a name="AppsyncGraphQlApiConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncGraphQlApiConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AuthenticationType,
    string Name,
    IResolvable|AppsyncGraphQlApiAdditionalAuthenticationProviders[] AdditionalAuthenticationProviders = null,
    string ApiType = null,
    AppsyncGraphQlApiEnhancedMetricsConfig EnhancedMetricsConfig = null,
    System.Collections.Generic.IDictionary<string, string> EnvironmentVariables = null,
    string IntrospectionConfig = null,
    AppsyncGraphQlApiLambdaAuthorizerConfig LambdaAuthorizerConfig = null,
    AppsyncGraphQlApiLogConfig LogConfig = null,
    string MergedApiExecutionRoleArn = null,
    AppsyncGraphQlApiOpenIdConnectConfig OpenIdConnectConfig = null,
    string OwnerContact = null,
    double QueryDepthLimit = null,
    double ResolverCountLimit = null,
    IResolvable|AppsyncGraphQlApiTags[] Tags = null,
    AppsyncGraphQlApiUserPoolConfig UserPoolConfig = null,
    string Visibility = null,
    bool|IResolvable XrayEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | Security configuration for your GraphQL API. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.name">Name</a></code> | <code>string</code> | The API name. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.additionalAuthenticationProviders">AdditionalAuthenticationProviders</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>[]</code> | A list of additional authentication providers for the GraphqlApi API. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.apiType">ApiType</a></code> | <code>string</code> | The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API (MERGED). |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.enhancedMetricsConfig">EnhancedMetricsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a></code> | Enables and controls the enhanced metrics feature. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map containing the list of resources with their properties and environment variables. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.introspectionConfig">IntrospectionConfig</a></code> | <code>string</code> | Sets the value of the GraphQL API to enable (ENABLED) or disable (DISABLED) introspection. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.lambdaAuthorizerConfig">LambdaAuthorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a></code> | A LambdaAuthorizerConfig holds configuration on how to authorize AWS AppSync API access when using the AWS_LAMBDA authorizer mode. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a></code> | The Amazon CloudWatch Logs configuration. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.mergedApiExecutionRoleArn">MergedApiExecutionRoleArn</a></code> | <code>string</code> | The AWS Identity and Access Management service role ARN for a merged API. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.openIdConnectConfig">OpenIdConnectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a></code> | The OpenID Connect configuration. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.ownerContact">OwnerContact</a></code> | <code>string</code> | The owner contact information for an API resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.queryDepthLimit">QueryDepthLimit</a></code> | <code>double</code> | The maximum depth a query can have in a single request. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.resolverCountLimit">ResolverCountLimit</a></code> | <code>double</code> | The maximum number of resolvers that can be invoked in a single request. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>[]</code> | An arbitrary set of tags (key-value pairs) for this GraphQL API. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.userPoolConfig">UserPoolConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a></code> | Optional authorization configuration for using Amazon Cognito user pools with your GraphQL endpoint. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.visibility">Visibility</a></code> | <code>string</code> | Sets the scope of the GraphQL API to public (GLOBAL) or private (PRIVATE). |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.xrayEnabled">XrayEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A flag indicating whether to use AWS X-Ray tracing for this GraphqlApi. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; set; }
```

- *Type:* string

Security configuration for your GraphQL API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#authentication_type AppsyncGraphQlApi#authentication_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The API name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#name AppsyncGraphQlApi#name}

---

##### `AdditionalAuthenticationProviders`<sup>Optional</sup> <a name="AdditionalAuthenticationProviders" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.additionalAuthenticationProviders"></a>

```csharp
public IResolvable|AppsyncGraphQlApiAdditionalAuthenticationProviders[] AdditionalAuthenticationProviders { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>[]

A list of additional authentication providers for the GraphqlApi API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#additional_authentication_providers AppsyncGraphQlApi#additional_authentication_providers}

---

##### `ApiType`<sup>Optional</sup> <a name="ApiType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.apiType"></a>

```csharp
public string ApiType { get; set; }
```

- *Type:* string

The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API (MERGED).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#api_type AppsyncGraphQlApi#api_type}

---

##### `EnhancedMetricsConfig`<sup>Optional</sup> <a name="EnhancedMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.enhancedMetricsConfig"></a>

```csharp
public AppsyncGraphQlApiEnhancedMetricsConfig EnhancedMetricsConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a>

Enables and controls the enhanced metrics feature.

Enhanced metrics emit granular data on API usage and performance such as AppSync request and error counts, latency, and cache hits/misses. All enhanced metric data is sent to your CloudWatch account, and you can configure the types of data that will be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#enhanced_metrics_config AppsyncGraphQlApi#enhanced_metrics_config}

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map containing the list of resources with their properties and environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#environment_variables AppsyncGraphQlApi#environment_variables}

---

##### `IntrospectionConfig`<sup>Optional</sup> <a name="IntrospectionConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.introspectionConfig"></a>

```csharp
public string IntrospectionConfig { get; set; }
```

- *Type:* string

Sets the value of the GraphQL API to enable (ENABLED) or disable (DISABLED) introspection.

If no value is provided, the introspection configuration will be set to ENABLED by default. This field will produce an error if the operation attempts to use the introspection feature while this field is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#introspection_config AppsyncGraphQlApi#introspection_config}

---

##### `LambdaAuthorizerConfig`<sup>Optional</sup> <a name="LambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.lambdaAuthorizerConfig"></a>

```csharp
public AppsyncGraphQlApiLambdaAuthorizerConfig LambdaAuthorizerConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a>

A LambdaAuthorizerConfig holds configuration on how to authorize AWS AppSync API access when using the AWS_LAMBDA authorizer mode.

Be aware that an AWS AppSync API may have only one Lambda authorizer configured at a time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#lambda_authorizer_config AppsyncGraphQlApi#lambda_authorizer_config}

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.logConfig"></a>

```csharp
public AppsyncGraphQlApiLogConfig LogConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a>

The Amazon CloudWatch Logs configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#log_config AppsyncGraphQlApi#log_config}

---

##### `MergedApiExecutionRoleArn`<sup>Optional</sup> <a name="MergedApiExecutionRoleArn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.mergedApiExecutionRoleArn"></a>

```csharp
public string MergedApiExecutionRoleArn { get; set; }
```

- *Type:* string

The AWS Identity and Access Management service role ARN for a merged API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#merged_api_execution_role_arn AppsyncGraphQlApi#merged_api_execution_role_arn}

---

##### `OpenIdConnectConfig`<sup>Optional</sup> <a name="OpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.openIdConnectConfig"></a>

```csharp
public AppsyncGraphQlApiOpenIdConnectConfig OpenIdConnectConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a>

The OpenID Connect configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#open_id_connect_config AppsyncGraphQlApi#open_id_connect_config}

---

##### `OwnerContact`<sup>Optional</sup> <a name="OwnerContact" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.ownerContact"></a>

```csharp
public string OwnerContact { get; set; }
```

- *Type:* string

The owner contact information for an API resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#owner_contact AppsyncGraphQlApi#owner_contact}

---

##### `QueryDepthLimit`<sup>Optional</sup> <a name="QueryDepthLimit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.queryDepthLimit"></a>

```csharp
public double QueryDepthLimit { get; set; }
```

- *Type:* double

The maximum depth a query can have in a single request.

Depth refers to the amount of nested levels allowed in the body of query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#query_depth_limit AppsyncGraphQlApi#query_depth_limit}

---

##### `ResolverCountLimit`<sup>Optional</sup> <a name="ResolverCountLimit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.resolverCountLimit"></a>

```csharp
public double ResolverCountLimit { get; set; }
```

- *Type:* double

The maximum number of resolvers that can be invoked in a single request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#resolver_count_limit AppsyncGraphQlApi#resolver_count_limit}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.tags"></a>

```csharp
public IResolvable|AppsyncGraphQlApiTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>[]

An arbitrary set of tags (key-value pairs) for this GraphQL API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#tags AppsyncGraphQlApi#tags}

---

##### `UserPoolConfig`<sup>Optional</sup> <a name="UserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.userPoolConfig"></a>

```csharp
public AppsyncGraphQlApiUserPoolConfig UserPoolConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a>

Optional authorization configuration for using Amazon Cognito user pools with your GraphQL endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#user_pool_config AppsyncGraphQlApi#user_pool_config}

---

##### `Visibility`<sup>Optional</sup> <a name="Visibility" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.visibility"></a>

```csharp
public string Visibility { get; set; }
```

- *Type:* string

Sets the scope of the GraphQL API to public (GLOBAL) or private (PRIVATE).

By default, the scope is set to Global if no value is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#visibility AppsyncGraphQlApi#visibility}

---

##### `XrayEnabled`<sup>Optional</sup> <a name="XrayEnabled" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.xrayEnabled"></a>

```csharp
public bool|IResolvable XrayEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A flag indicating whether to use AWS X-Ray tracing for this GraphqlApi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#xray_enabled AppsyncGraphQlApi#xray_enabled}

---

### AppsyncGraphQlApiEnhancedMetricsConfig <a name="AppsyncGraphQlApiEnhancedMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncGraphQlApiEnhancedMetricsConfig {
    string DataSourceLevelMetricsBehavior = null,
    string OperationLevelMetricsConfig = null,
    string ResolverLevelMetricsBehavior = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.property.dataSourceLevelMetricsBehavior">DataSourceLevelMetricsBehavior</a></code> | <code>string</code> | Controls how data source metrics will be emitted to CloudWatch. Data source metrics include:. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.property.operationLevelMetricsConfig">OperationLevelMetricsConfig</a></code> | <code>string</code> | Controls how operation metrics will be emitted to CloudWatch. Operation metrics include:. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.property.resolverLevelMetricsBehavior">ResolverLevelMetricsBehavior</a></code> | <code>string</code> | Controls how resolver metrics will be emitted to CloudWatch. Resolver metrics include:. |

---

##### `DataSourceLevelMetricsBehavior`<sup>Optional</sup> <a name="DataSourceLevelMetricsBehavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.property.dataSourceLevelMetricsBehavior"></a>

```csharp
public string DataSourceLevelMetricsBehavior { get; set; }
```

- *Type:* string

Controls how data source metrics will be emitted to CloudWatch. Data source metrics include:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#data_source_level_metrics_behavior AppsyncGraphQlApi#data_source_level_metrics_behavior}

---

##### `OperationLevelMetricsConfig`<sup>Optional</sup> <a name="OperationLevelMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.property.operationLevelMetricsConfig"></a>

```csharp
public string OperationLevelMetricsConfig { get; set; }
```

- *Type:* string

Controls how operation metrics will be emitted to CloudWatch. Operation metrics include:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#operation_level_metrics_config AppsyncGraphQlApi#operation_level_metrics_config}

---

##### `ResolverLevelMetricsBehavior`<sup>Optional</sup> <a name="ResolverLevelMetricsBehavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.property.resolverLevelMetricsBehavior"></a>

```csharp
public string ResolverLevelMetricsBehavior { get; set; }
```

- *Type:* string

Controls how resolver metrics will be emitted to CloudWatch. Resolver metrics include:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#resolver_level_metrics_behavior AppsyncGraphQlApi#resolver_level_metrics_behavior}

---

### AppsyncGraphQlApiLambdaAuthorizerConfig <a name="AppsyncGraphQlApiLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncGraphQlApiLambdaAuthorizerConfig {
    double AuthorizerResultTtlInSeconds = null,
    string AuthorizerUri = null,
    string IdentityValidationExpression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds">AuthorizerResultTtlInSeconds</a></code> | <code>double</code> | The number of seconds a response should be cached for. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.property.authorizerUri">AuthorizerUri</a></code> | <code>string</code> | The ARN of the Lambda function to be called for authorization. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.property.identityValidationExpression">IdentityValidationExpression</a></code> | <code>string</code> | A regular expression for validation of tokens before the Lambda function is called. |

---

##### `AuthorizerResultTtlInSeconds`<sup>Optional</sup> <a name="AuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```csharp
public double AuthorizerResultTtlInSeconds { get; set; }
```

- *Type:* double

The number of seconds a response should be cached for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#authorizer_result_ttl_in_seconds AppsyncGraphQlApi#authorizer_result_ttl_in_seconds}

---

##### `AuthorizerUri`<sup>Optional</sup> <a name="AuthorizerUri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.property.authorizerUri"></a>

```csharp
public string AuthorizerUri { get; set; }
```

- *Type:* string

The ARN of the Lambda function to be called for authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#authorizer_uri AppsyncGraphQlApi#authorizer_uri}

---

##### `IdentityValidationExpression`<sup>Optional</sup> <a name="IdentityValidationExpression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.property.identityValidationExpression"></a>

```csharp
public string IdentityValidationExpression { get; set; }
```

- *Type:* string

A regular expression for validation of tokens before the Lambda function is called.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#identity_validation_expression AppsyncGraphQlApi#identity_validation_expression}

---

### AppsyncGraphQlApiLogConfig <a name="AppsyncGraphQlApiLogConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncGraphQlApiLogConfig {
    string CloudwatchLogsRoleArn = null,
    bool|IResolvable ExcludeVerboseContent = null,
    string FieldLogLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.property.cloudwatchLogsRoleArn">CloudwatchLogsRoleArn</a></code> | <code>string</code> | The service role that AWS AppSync will assume to publish to Amazon CloudWatch Logs in your account. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.property.excludeVerboseContent">ExcludeVerboseContent</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set to TRUE to exclude sections that contain information such as headers, context, and evaluated mapping templates, regardless of logging level. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.property.fieldLogLevel">FieldLogLevel</a></code> | <code>string</code> | The field logging level. Values can be NONE, ERROR, INFO, DEBUG, or ALL. |

---

##### `CloudwatchLogsRoleArn`<sup>Optional</sup> <a name="CloudwatchLogsRoleArn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.property.cloudwatchLogsRoleArn"></a>

```csharp
public string CloudwatchLogsRoleArn { get; set; }
```

- *Type:* string

The service role that AWS AppSync will assume to publish to Amazon CloudWatch Logs in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#cloudwatch_logs_role_arn AppsyncGraphQlApi#cloudwatch_logs_role_arn}

---

##### `ExcludeVerboseContent`<sup>Optional</sup> <a name="ExcludeVerboseContent" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.property.excludeVerboseContent"></a>

```csharp
public bool|IResolvable ExcludeVerboseContent { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set to TRUE to exclude sections that contain information such as headers, context, and evaluated mapping templates, regardless of logging level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#exclude_verbose_content AppsyncGraphQlApi#exclude_verbose_content}

---

##### `FieldLogLevel`<sup>Optional</sup> <a name="FieldLogLevel" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.property.fieldLogLevel"></a>

```csharp
public string FieldLogLevel { get; set; }
```

- *Type:* string

The field logging level. Values can be NONE, ERROR, INFO, DEBUG, or ALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#field_log_level AppsyncGraphQlApi#field_log_level}

---

### AppsyncGraphQlApiOpenIdConnectConfig <a name="AppsyncGraphQlApiOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncGraphQlApiOpenIdConnectConfig {
    double AuthTtl = null,
    string ClientId = null,
    double IatTtl = null,
    string Issuer = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.authTtl">AuthTtl</a></code> | <code>double</code> | The number of milliseconds that a token is valid after being authenticated. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.clientId">ClientId</a></code> | <code>string</code> | The client identifier of the Relying party at the OpenID identity provider. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.iatTtl">IatTtl</a></code> | <code>double</code> | The number of milliseconds that a token is valid after it's issued to a user. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.issuer">Issuer</a></code> | <code>string</code> | The issuer for the OIDC configuration. |

---

##### `AuthTtl`<sup>Optional</sup> <a name="AuthTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.authTtl"></a>

```csharp
public double AuthTtl { get; set; }
```

- *Type:* double

The number of milliseconds that a token is valid after being authenticated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#auth_ttl AppsyncGraphQlApi#auth_ttl}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The client identifier of the Relying party at the OpenID identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#client_id AppsyncGraphQlApi#client_id}

---

##### `IatTtl`<sup>Optional</sup> <a name="IatTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.iatTtl"></a>

```csharp
public double IatTtl { get; set; }
```

- *Type:* double

The number of milliseconds that a token is valid after it's issued to a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#iat_ttl AppsyncGraphQlApi#iat_ttl}

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

The issuer for the OIDC configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#issuer AppsyncGraphQlApi#issuer}

---

### AppsyncGraphQlApiTags <a name="AppsyncGraphQlApiTags" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncGraphQlApiTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#key AppsyncGraphQlApi#key}. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#value AppsyncGraphQlApi#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#key AppsyncGraphQlApi#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#value AppsyncGraphQlApi#value}.

---

### AppsyncGraphQlApiUserPoolConfig <a name="AppsyncGraphQlApiUserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncGraphQlApiUserPoolConfig {
    string AppIdClientRegex = null,
    string AwsRegion = null,
    string DefaultAction = null,
    string UserPoolId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.appIdClientRegex">AppIdClientRegex</a></code> | <code>string</code> | A regular expression for validating the incoming Amazon Cognito user pool app client ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.awsRegion">AwsRegion</a></code> | <code>string</code> | The AWS Region in which the user pool was created. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.defaultAction">DefaultAction</a></code> | <code>string</code> | The action that you want your GraphQL API to take when a request that uses Amazon Cognito user pool authentication doesn't match the Amazon Cognito user pool configuration. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.userPoolId">UserPoolId</a></code> | <code>string</code> | The user pool ID. |

---

##### `AppIdClientRegex`<sup>Optional</sup> <a name="AppIdClientRegex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.appIdClientRegex"></a>

```csharp
public string AppIdClientRegex { get; set; }
```

- *Type:* string

A regular expression for validating the incoming Amazon Cognito user pool app client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#app_id_client_regex AppsyncGraphQlApi#app_id_client_regex}

---

##### `AwsRegion`<sup>Optional</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.awsRegion"></a>

```csharp
public string AwsRegion { get; set; }
```

- *Type:* string

The AWS Region in which the user pool was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#aws_region AppsyncGraphQlApi#aws_region}

---

##### `DefaultAction`<sup>Optional</sup> <a name="DefaultAction" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.defaultAction"></a>

```csharp
public string DefaultAction { get; set; }
```

- *Type:* string

The action that you want your GraphQL API to take when a request that uses Amazon Cognito user pool authentication doesn't match the Amazon Cognito user pool configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#default_action AppsyncGraphQlApi#default_action}

---

##### `UserPoolId`<sup>Optional</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.userPoolId"></a>

```csharp
public string UserPoolId { get; set; }
```

- *Type:* string

The user pool ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_graph_ql_api#user_pool_id AppsyncGraphQlApi#user_pool_id}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds">ResetAuthorizerResultTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerUri">ResetAuthorizerUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression">ResetIdentityValidationExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizerResultTtlInSeconds` <a name="ResetAuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds"></a>

```csharp
private void ResetAuthorizerResultTtlInSeconds()
```

##### `ResetAuthorizerUri` <a name="ResetAuthorizerUri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerUri"></a>

```csharp
private void ResetAuthorizerUri()
```

##### `ResetIdentityValidationExpression` <a name="ResetIdentityValidationExpression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression"></a>

```csharp
private void ResetIdentityValidationExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput">AuthorizerResultTtlInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUriInput">AuthorizerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput">IdentityValidationExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds">AuthorizerResultTtlInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUri">AuthorizerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpression">IdentityValidationExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizerResultTtlInSecondsInput`<sup>Optional</sup> <a name="AuthorizerResultTtlInSecondsInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput"></a>

```csharp
public double AuthorizerResultTtlInSecondsInput { get; }
```

- *Type:* double

---

##### `AuthorizerUriInput`<sup>Optional</sup> <a name="AuthorizerUriInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUriInput"></a>

```csharp
public string AuthorizerUriInput { get; }
```

- *Type:* string

---

##### `IdentityValidationExpressionInput`<sup>Optional</sup> <a name="IdentityValidationExpressionInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput"></a>

```csharp
public string IdentityValidationExpressionInput { get; }
```

- *Type:* string

---

##### `AuthorizerResultTtlInSeconds`<sup>Required</sup> <a name="AuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds"></a>

```csharp
public double AuthorizerResultTtlInSeconds { get; }
```

- *Type:* double

---

##### `AuthorizerUri`<sup>Required</sup> <a name="AuthorizerUri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUri"></a>

```csharp
public string AuthorizerUri { get; }
```

- *Type:* string

---

##### `IdentityValidationExpression`<sup>Required</sup> <a name="IdentityValidationExpression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpression"></a>

```csharp
public string IdentityValidationExpression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a>

---


### AppsyncGraphQlApiAdditionalAuthenticationProvidersList <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersList" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncGraphQlApiAdditionalAuthenticationProvidersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.get"></a>

```csharp
private AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.internalValue"></a>

```csharp
public IResolvable|AppsyncGraphQlApiAdditionalAuthenticationProviders[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>[]

---


### AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetAuthTtl">ResetAuthTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetIatTtl">ResetIatTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthTtl` <a name="ResetAuthTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetAuthTtl"></a>

```csharp
private void ResetAuthTtl()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetIatTtl` <a name="ResetIatTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetIatTtl"></a>

```csharp
private void ResetIatTtl()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetIssuer"></a>

```csharp
private void ResetIssuer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.authTtlInput">AuthTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.iatTtlInput">IatTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.authTtl">AuthTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.iatTtl">IatTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthTtlInput`<sup>Optional</sup> <a name="AuthTtlInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.authTtlInput"></a>

```csharp
public double AuthTtlInput { get; }
```

- *Type:* double

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `IatTtlInput`<sup>Optional</sup> <a name="IatTtlInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.iatTtlInput"></a>

```csharp
public double IatTtlInput { get; }
```

- *Type:* double

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `AuthTtl`<sup>Required</sup> <a name="AuthTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.authTtl"></a>

```csharp
public double AuthTtl { get; }
```

- *Type:* double

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `IatTtl`<sup>Required</sup> <a name="IatTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.iatTtl"></a>

```csharp
public double IatTtl { get; }
```

- *Type:* double

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a>

---


### AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putLambdaAuthorizerConfig">PutLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putOpenIdConnectConfig">PutOpenIdConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putUserPoolConfig">PutUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetAuthenticationType">ResetAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetLambdaAuthorizerConfig">ResetLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetOpenIdConnectConfig">ResetOpenIdConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetUserPoolConfig">ResetUserPoolConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLambdaAuthorizerConfig` <a name="PutLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putLambdaAuthorizerConfig"></a>

```csharp
private void PutLambdaAuthorizerConfig(AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putLambdaAuthorizerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a>

---

##### `PutOpenIdConnectConfig` <a name="PutOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putOpenIdConnectConfig"></a>

```csharp
private void PutOpenIdConnectConfig(AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putOpenIdConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a>

---

##### `PutUserPoolConfig` <a name="PutUserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putUserPoolConfig"></a>

```csharp
private void PutUserPoolConfig(AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putUserPoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a>

---

##### `ResetAuthenticationType` <a name="ResetAuthenticationType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetAuthenticationType"></a>

```csharp
private void ResetAuthenticationType()
```

##### `ResetLambdaAuthorizerConfig` <a name="ResetLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetLambdaAuthorizerConfig"></a>

```csharp
private void ResetLambdaAuthorizerConfig()
```

##### `ResetOpenIdConnectConfig` <a name="ResetOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetOpenIdConnectConfig"></a>

```csharp
private void ResetOpenIdConnectConfig()
```

##### `ResetUserPoolConfig` <a name="ResetUserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetUserPoolConfig"></a>

```csharp
private void ResetUserPoolConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.lambdaAuthorizerConfig">LambdaAuthorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.openIdConnectConfig">OpenIdConnectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.userPoolConfig">UserPoolConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.lambdaAuthorizerConfigInput">LambdaAuthorizerConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.openIdConnectConfigInput">OpenIdConnectConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.userPoolConfigInput">UserPoolConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LambdaAuthorizerConfig`<sup>Required</sup> <a name="LambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.lambdaAuthorizerConfig"></a>

```csharp
public AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference LambdaAuthorizerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference</a>

---

##### `OpenIdConnectConfig`<sup>Required</sup> <a name="OpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.openIdConnectConfig"></a>

```csharp
public AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference OpenIdConnectConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference</a>

---

##### `UserPoolConfig`<sup>Required</sup> <a name="UserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.userPoolConfig"></a>

```csharp
public AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference UserPoolConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference</a>

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.authenticationTypeInput"></a>

```csharp
public string AuthenticationTypeInput { get; }
```

- *Type:* string

---

##### `LambdaAuthorizerConfigInput`<sup>Optional</sup> <a name="LambdaAuthorizerConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.lambdaAuthorizerConfigInput"></a>

```csharp
public IResolvable|AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig LambdaAuthorizerConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a>

---

##### `OpenIdConnectConfigInput`<sup>Optional</sup> <a name="OpenIdConnectConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.openIdConnectConfigInput"></a>

```csharp
public IResolvable|AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig OpenIdConnectConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a>

---

##### `UserPoolConfigInput`<sup>Optional</sup> <a name="UserPoolConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.userPoolConfigInput"></a>

```csharp
public IResolvable|AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig UserPoolConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a>

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncGraphQlApiAdditionalAuthenticationProviders InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>

---


### AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resetAppIdClientRegex">ResetAppIdClientRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resetAwsRegion">ResetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resetUserPoolId">ResetUserPoolId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppIdClientRegex` <a name="ResetAppIdClientRegex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resetAppIdClientRegex"></a>

```csharp
private void ResetAppIdClientRegex()
```

##### `ResetAwsRegion` <a name="ResetAwsRegion" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resetAwsRegion"></a>

```csharp
private void ResetAwsRegion()
```

##### `ResetUserPoolId` <a name="ResetUserPoolId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resetUserPoolId"></a>

```csharp
private void ResetUserPoolId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.appIdClientRegexInput">AppIdClientRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.awsRegionInput">AwsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.appIdClientRegex">AppIdClientRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.awsRegion">AwsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.userPoolId">UserPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppIdClientRegexInput`<sup>Optional</sup> <a name="AppIdClientRegexInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.appIdClientRegexInput"></a>

```csharp
public string AppIdClientRegexInput { get; }
```

- *Type:* string

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.awsRegionInput"></a>

```csharp
public string AwsRegionInput { get; }
```

- *Type:* string

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.userPoolIdInput"></a>

```csharp
public string UserPoolIdInput { get; }
```

- *Type:* string

---

##### `AppIdClientRegex`<sup>Required</sup> <a name="AppIdClientRegex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.appIdClientRegex"></a>

```csharp
public string AppIdClientRegex { get; }
```

- *Type:* string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.awsRegion"></a>

```csharp
public string AwsRegion { get; }
```

- *Type:* string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.userPoolId"></a>

```csharp
public string UserPoolId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a>

---


### AppsyncGraphQlApiEnhancedMetricsConfigOutputReference <a name="AppsyncGraphQlApiEnhancedMetricsConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncGraphQlApiEnhancedMetricsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resetDataSourceLevelMetricsBehavior">ResetDataSourceLevelMetricsBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resetOperationLevelMetricsConfig">ResetOperationLevelMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resetResolverLevelMetricsBehavior">ResetResolverLevelMetricsBehavior</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataSourceLevelMetricsBehavior` <a name="ResetDataSourceLevelMetricsBehavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resetDataSourceLevelMetricsBehavior"></a>

```csharp
private void ResetDataSourceLevelMetricsBehavior()
```

##### `ResetOperationLevelMetricsConfig` <a name="ResetOperationLevelMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resetOperationLevelMetricsConfig"></a>

```csharp
private void ResetOperationLevelMetricsConfig()
```

##### `ResetResolverLevelMetricsBehavior` <a name="ResetResolverLevelMetricsBehavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resetResolverLevelMetricsBehavior"></a>

```csharp
private void ResetResolverLevelMetricsBehavior()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.dataSourceLevelMetricsBehaviorInput">DataSourceLevelMetricsBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.operationLevelMetricsConfigInput">OperationLevelMetricsConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.resolverLevelMetricsBehaviorInput">ResolverLevelMetricsBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.dataSourceLevelMetricsBehavior">DataSourceLevelMetricsBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.operationLevelMetricsConfig">OperationLevelMetricsConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.resolverLevelMetricsBehavior">ResolverLevelMetricsBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataSourceLevelMetricsBehaviorInput`<sup>Optional</sup> <a name="DataSourceLevelMetricsBehaviorInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.dataSourceLevelMetricsBehaviorInput"></a>

```csharp
public string DataSourceLevelMetricsBehaviorInput { get; }
```

- *Type:* string

---

##### `OperationLevelMetricsConfigInput`<sup>Optional</sup> <a name="OperationLevelMetricsConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.operationLevelMetricsConfigInput"></a>

```csharp
public string OperationLevelMetricsConfigInput { get; }
```

- *Type:* string

---

##### `ResolverLevelMetricsBehaviorInput`<sup>Optional</sup> <a name="ResolverLevelMetricsBehaviorInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.resolverLevelMetricsBehaviorInput"></a>

```csharp
public string ResolverLevelMetricsBehaviorInput { get; }
```

- *Type:* string

---

##### `DataSourceLevelMetricsBehavior`<sup>Required</sup> <a name="DataSourceLevelMetricsBehavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.dataSourceLevelMetricsBehavior"></a>

```csharp
public string DataSourceLevelMetricsBehavior { get; }
```

- *Type:* string

---

##### `OperationLevelMetricsConfig`<sup>Required</sup> <a name="OperationLevelMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.operationLevelMetricsConfig"></a>

```csharp
public string OperationLevelMetricsConfig { get; }
```

- *Type:* string

---

##### `ResolverLevelMetricsBehavior`<sup>Required</sup> <a name="ResolverLevelMetricsBehavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.resolverLevelMetricsBehavior"></a>

```csharp
public string ResolverLevelMetricsBehavior { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncGraphQlApiEnhancedMetricsConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a>

---


### AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference <a name="AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds">ResetAuthorizerResultTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resetAuthorizerUri">ResetAuthorizerUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression">ResetIdentityValidationExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizerResultTtlInSeconds` <a name="ResetAuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds"></a>

```csharp
private void ResetAuthorizerResultTtlInSeconds()
```

##### `ResetAuthorizerUri` <a name="ResetAuthorizerUri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resetAuthorizerUri"></a>

```csharp
private void ResetAuthorizerUri()
```

##### `ResetIdentityValidationExpression` <a name="ResetIdentityValidationExpression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression"></a>

```csharp
private void ResetIdentityValidationExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput">AuthorizerResultTtlInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerUriInput">AuthorizerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput">IdentityValidationExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds">AuthorizerResultTtlInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerUri">AuthorizerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpression">IdentityValidationExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizerResultTtlInSecondsInput`<sup>Optional</sup> <a name="AuthorizerResultTtlInSecondsInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput"></a>

```csharp
public double AuthorizerResultTtlInSecondsInput { get; }
```

- *Type:* double

---

##### `AuthorizerUriInput`<sup>Optional</sup> <a name="AuthorizerUriInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerUriInput"></a>

```csharp
public string AuthorizerUriInput { get; }
```

- *Type:* string

---

##### `IdentityValidationExpressionInput`<sup>Optional</sup> <a name="IdentityValidationExpressionInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput"></a>

```csharp
public string IdentityValidationExpressionInput { get; }
```

- *Type:* string

---

##### `AuthorizerResultTtlInSeconds`<sup>Required</sup> <a name="AuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds"></a>

```csharp
public double AuthorizerResultTtlInSeconds { get; }
```

- *Type:* double

---

##### `AuthorizerUri`<sup>Required</sup> <a name="AuthorizerUri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerUri"></a>

```csharp
public string AuthorizerUri { get; }
```

- *Type:* string

---

##### `IdentityValidationExpression`<sup>Required</sup> <a name="IdentityValidationExpression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpression"></a>

```csharp
public string IdentityValidationExpression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncGraphQlApiLambdaAuthorizerConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a>

---


### AppsyncGraphQlApiLogConfigOutputReference <a name="AppsyncGraphQlApiLogConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncGraphQlApiLogConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resetCloudwatchLogsRoleArn">ResetCloudwatchLogsRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resetExcludeVerboseContent">ResetExcludeVerboseContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resetFieldLogLevel">ResetFieldLogLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudwatchLogsRoleArn` <a name="ResetCloudwatchLogsRoleArn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resetCloudwatchLogsRoleArn"></a>

```csharp
private void ResetCloudwatchLogsRoleArn()
```

##### `ResetExcludeVerboseContent` <a name="ResetExcludeVerboseContent" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resetExcludeVerboseContent"></a>

```csharp
private void ResetExcludeVerboseContent()
```

##### `ResetFieldLogLevel` <a name="ResetFieldLogLevel" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resetFieldLogLevel"></a>

```csharp
private void ResetFieldLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.cloudwatchLogsRoleArnInput">CloudwatchLogsRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.excludeVerboseContentInput">ExcludeVerboseContentInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.fieldLogLevelInput">FieldLogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.cloudwatchLogsRoleArn">CloudwatchLogsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.excludeVerboseContent">ExcludeVerboseContent</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.fieldLogLevel">FieldLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogsRoleArnInput`<sup>Optional</sup> <a name="CloudwatchLogsRoleArnInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.cloudwatchLogsRoleArnInput"></a>

```csharp
public string CloudwatchLogsRoleArnInput { get; }
```

- *Type:* string

---

##### `ExcludeVerboseContentInput`<sup>Optional</sup> <a name="ExcludeVerboseContentInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.excludeVerboseContentInput"></a>

```csharp
public bool|IResolvable ExcludeVerboseContentInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FieldLogLevelInput`<sup>Optional</sup> <a name="FieldLogLevelInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.fieldLogLevelInput"></a>

```csharp
public string FieldLogLevelInput { get; }
```

- *Type:* string

---

##### `CloudwatchLogsRoleArn`<sup>Required</sup> <a name="CloudwatchLogsRoleArn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.cloudwatchLogsRoleArn"></a>

```csharp
public string CloudwatchLogsRoleArn { get; }
```

- *Type:* string

---

##### `ExcludeVerboseContent`<sup>Required</sup> <a name="ExcludeVerboseContent" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.excludeVerboseContent"></a>

```csharp
public bool|IResolvable ExcludeVerboseContent { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FieldLogLevel`<sup>Required</sup> <a name="FieldLogLevel" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.fieldLogLevel"></a>

```csharp
public string FieldLogLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncGraphQlApiLogConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a>

---


### AppsyncGraphQlApiOpenIdConnectConfigOutputReference <a name="AppsyncGraphQlApiOpenIdConnectConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncGraphQlApiOpenIdConnectConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetAuthTtl">ResetAuthTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetIatTtl">ResetIatTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthTtl` <a name="ResetAuthTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetAuthTtl"></a>

```csharp
private void ResetAuthTtl()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetIatTtl` <a name="ResetIatTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetIatTtl"></a>

```csharp
private void ResetIatTtl()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetIssuer"></a>

```csharp
private void ResetIssuer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.authTtlInput">AuthTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.iatTtlInput">IatTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.authTtl">AuthTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.iatTtl">IatTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthTtlInput`<sup>Optional</sup> <a name="AuthTtlInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.authTtlInput"></a>

```csharp
public double AuthTtlInput { get; }
```

- *Type:* double

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `IatTtlInput`<sup>Optional</sup> <a name="IatTtlInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.iatTtlInput"></a>

```csharp
public double IatTtlInput { get; }
```

- *Type:* double

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `AuthTtl`<sup>Required</sup> <a name="AuthTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.authTtl"></a>

```csharp
public double AuthTtl { get; }
```

- *Type:* double

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `IatTtl`<sup>Required</sup> <a name="IatTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.iatTtl"></a>

```csharp
public double IatTtl { get; }
```

- *Type:* double

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncGraphQlApiOpenIdConnectConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a>

---


### AppsyncGraphQlApiTagsList <a name="AppsyncGraphQlApiTagsList" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncGraphQlApiTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.get"></a>

```csharp
private AppsyncGraphQlApiTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.property.internalValue"></a>

```csharp
public IResolvable|AppsyncGraphQlApiTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>[]

---


### AppsyncGraphQlApiTagsOutputReference <a name="AppsyncGraphQlApiTagsOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncGraphQlApiTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncGraphQlApiTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>

---


### AppsyncGraphQlApiUserPoolConfigOutputReference <a name="AppsyncGraphQlApiUserPoolConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncGraphQlApiUserPoolConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetAppIdClientRegex">ResetAppIdClientRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetAwsRegion">ResetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetDefaultAction">ResetDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetUserPoolId">ResetUserPoolId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppIdClientRegex` <a name="ResetAppIdClientRegex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetAppIdClientRegex"></a>

```csharp
private void ResetAppIdClientRegex()
```

##### `ResetAwsRegion` <a name="ResetAwsRegion" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetAwsRegion"></a>

```csharp
private void ResetAwsRegion()
```

##### `ResetDefaultAction` <a name="ResetDefaultAction" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetDefaultAction"></a>

```csharp
private void ResetDefaultAction()
```

##### `ResetUserPoolId` <a name="ResetUserPoolId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetUserPoolId"></a>

```csharp
private void ResetUserPoolId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.appIdClientRegexInput">AppIdClientRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.awsRegionInput">AwsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.defaultActionInput">DefaultActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.appIdClientRegex">AppIdClientRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.awsRegion">AwsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.defaultAction">DefaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.userPoolId">UserPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppIdClientRegexInput`<sup>Optional</sup> <a name="AppIdClientRegexInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.appIdClientRegexInput"></a>

```csharp
public string AppIdClientRegexInput { get; }
```

- *Type:* string

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.awsRegionInput"></a>

```csharp
public string AwsRegionInput { get; }
```

- *Type:* string

---

##### `DefaultActionInput`<sup>Optional</sup> <a name="DefaultActionInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.defaultActionInput"></a>

```csharp
public string DefaultActionInput { get; }
```

- *Type:* string

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.userPoolIdInput"></a>

```csharp
public string UserPoolIdInput { get; }
```

- *Type:* string

---

##### `AppIdClientRegex`<sup>Required</sup> <a name="AppIdClientRegex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.appIdClientRegex"></a>

```csharp
public string AppIdClientRegex { get; }
```

- *Type:* string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.awsRegion"></a>

```csharp
public string AwsRegion { get; }
```

- *Type:* string

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.defaultAction"></a>

```csharp
public string DefaultAction { get; }
```

- *Type:* string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.userPoolId"></a>

```csharp
public string UserPoolId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncGraphQlApiUserPoolConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a>

---



