# `apigatewayv2Api` Submodule <a name="`apigatewayv2Api` Submodule" id="@cdktn/provider-awscc.apigatewayv2Api"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Api <a name="Apigatewayv2Api" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api awscc_apigatewayv2_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Apigatewayv2Api(Construct Scope, string Id, Apigatewayv2ApiConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig">Apigatewayv2ApiConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig">Apigatewayv2ApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.putBodyS3Location">PutBodyS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.putCorsConfiguration">PutCorsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetApiKeySelectionExpression">ResetApiKeySelectionExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetBasePath">ResetBasePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetBodyS3Location">ResetBodyS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetCorsConfiguration">ResetCorsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetCredentialsArn">ResetCredentialsArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetDisableExecuteApiEndpoint">ResetDisableExecuteApiEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetDisableSchemaValidation">ResetDisableSchemaValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetFailOnWarnings">ResetFailOnWarnings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetProtocolType">ResetProtocolType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetRouteKey">ResetRouteKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetRouteSelectionExpression">ResetRouteSelectionExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBodyS3Location` <a name="PutBodyS3Location" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.putBodyS3Location"></a>

```csharp
private void PutBodyS3Location(Apigatewayv2ApiBodyS3Location Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.putBodyS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location">Apigatewayv2ApiBodyS3Location</a>

---

##### `PutCorsConfiguration` <a name="PutCorsConfiguration" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.putCorsConfiguration"></a>

```csharp
private void PutCorsConfiguration(Apigatewayv2ApiCorsConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.putCorsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a>

---

##### `ResetApiKeySelectionExpression` <a name="ResetApiKeySelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetApiKeySelectionExpression"></a>

```csharp
private void ResetApiKeySelectionExpression()
```

##### `ResetBasePath` <a name="ResetBasePath" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetBasePath"></a>

```csharp
private void ResetBasePath()
```

##### `ResetBody` <a name="ResetBody" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetBody"></a>

```csharp
private void ResetBody()
```

##### `ResetBodyS3Location` <a name="ResetBodyS3Location" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetBodyS3Location"></a>

```csharp
private void ResetBodyS3Location()
```

##### `ResetCorsConfiguration` <a name="ResetCorsConfiguration" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetCorsConfiguration"></a>

```csharp
private void ResetCorsConfiguration()
```

##### `ResetCredentialsArn` <a name="ResetCredentialsArn" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetCredentialsArn"></a>

```csharp
private void ResetCredentialsArn()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisableExecuteApiEndpoint` <a name="ResetDisableExecuteApiEndpoint" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetDisableExecuteApiEndpoint"></a>

```csharp
private void ResetDisableExecuteApiEndpoint()
```

##### `ResetDisableSchemaValidation` <a name="ResetDisableSchemaValidation" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetDisableSchemaValidation"></a>

```csharp
private void ResetDisableSchemaValidation()
```

##### `ResetFailOnWarnings` <a name="ResetFailOnWarnings" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetFailOnWarnings"></a>

```csharp
private void ResetFailOnWarnings()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProtocolType` <a name="ResetProtocolType" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetProtocolType"></a>

```csharp
private void ResetProtocolType()
```

##### `ResetRouteKey` <a name="ResetRouteKey" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetRouteKey"></a>

```csharp
private void ResetRouteKey()
```

##### `ResetRouteSelectionExpression` <a name="ResetRouteSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetRouteSelectionExpression"></a>

```csharp
private void ResetRouteSelectionExpression()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetTarget"></a>

```csharp
private void ResetTarget()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetVersion"></a>

```csharp
private void ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Apigatewayv2Api resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Apigatewayv2Api.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Apigatewayv2Api.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Apigatewayv2Api.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Apigatewayv2Api.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Apigatewayv2Api resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Apigatewayv2Api to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Apigatewayv2Api that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Apigatewayv2Api to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.apiEndpoint">ApiEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.apiId">ApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.bodyS3Location">BodyS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference">Apigatewayv2ApiBodyS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.corsConfiguration">CorsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference">Apigatewayv2ApiCorsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.apiKeySelectionExpressionInput">ApiKeySelectionExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.basePathInput">BasePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.bodyInput">BodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.bodyS3LocationInput">BodyS3LocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location">Apigatewayv2ApiBodyS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.corsConfigurationInput">CorsConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.credentialsArnInput">CredentialsArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.disableExecuteApiEndpointInput">DisableExecuteApiEndpointInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.disableSchemaValidationInput">DisableSchemaValidationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.failOnWarningsInput">FailOnWarningsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.protocolTypeInput">ProtocolTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.routeKeyInput">RouteKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.routeSelectionExpressionInput">RouteSelectionExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.apiKeySelectionExpression">ApiKeySelectionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.basePath">BasePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.credentialsArn">CredentialsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.disableExecuteApiEndpoint">DisableExecuteApiEndpoint</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.disableSchemaValidation">DisableSchemaValidation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.failOnWarnings">FailOnWarnings</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.protocolType">ProtocolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.routeKey">RouteKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.routeSelectionExpression">RouteSelectionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApiEndpoint`<sup>Required</sup> <a name="ApiEndpoint" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.apiEndpoint"></a>

```csharp
public string ApiEndpoint { get; }
```

- *Type:* string

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.apiId"></a>

```csharp
public string ApiId { get; }
```

- *Type:* string

---

##### `BodyS3Location`<sup>Required</sup> <a name="BodyS3Location" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.bodyS3Location"></a>

```csharp
public Apigatewayv2ApiBodyS3LocationOutputReference BodyS3Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference">Apigatewayv2ApiBodyS3LocationOutputReference</a>

---

##### `CorsConfiguration`<sup>Required</sup> <a name="CorsConfiguration" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.corsConfiguration"></a>

```csharp
public Apigatewayv2ApiCorsConfigurationOutputReference CorsConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference">Apigatewayv2ApiCorsConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ApiKeySelectionExpressionInput`<sup>Optional</sup> <a name="ApiKeySelectionExpressionInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.apiKeySelectionExpressionInput"></a>

```csharp
public string ApiKeySelectionExpressionInput { get; }
```

- *Type:* string

---

##### `BasePathInput`<sup>Optional</sup> <a name="BasePathInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.basePathInput"></a>

```csharp
public string BasePathInput { get; }
```

- *Type:* string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.bodyInput"></a>

```csharp
public string BodyInput { get; }
```

- *Type:* string

---

##### `BodyS3LocationInput`<sup>Optional</sup> <a name="BodyS3LocationInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.bodyS3LocationInput"></a>

```csharp
public IResolvable|Apigatewayv2ApiBodyS3Location BodyS3LocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location">Apigatewayv2ApiBodyS3Location</a>

---

##### `CorsConfigurationInput`<sup>Optional</sup> <a name="CorsConfigurationInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.corsConfigurationInput"></a>

```csharp
public IResolvable|Apigatewayv2ApiCorsConfiguration CorsConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a>

---

##### `CredentialsArnInput`<sup>Optional</sup> <a name="CredentialsArnInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.credentialsArnInput"></a>

```csharp
public string CredentialsArnInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisableExecuteApiEndpointInput`<sup>Optional</sup> <a name="DisableExecuteApiEndpointInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.disableExecuteApiEndpointInput"></a>

```csharp
public bool|IResolvable DisableExecuteApiEndpointInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisableSchemaValidationInput`<sup>Optional</sup> <a name="DisableSchemaValidationInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.disableSchemaValidationInput"></a>

```csharp
public bool|IResolvable DisableSchemaValidationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FailOnWarningsInput`<sup>Optional</sup> <a name="FailOnWarningsInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.failOnWarningsInput"></a>

```csharp
public bool|IResolvable FailOnWarningsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProtocolTypeInput`<sup>Optional</sup> <a name="ProtocolTypeInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.protocolTypeInput"></a>

```csharp
public string ProtocolTypeInput { get; }
```

- *Type:* string

---

##### `RouteKeyInput`<sup>Optional</sup> <a name="RouteKeyInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.routeKeyInput"></a>

```csharp
public string RouteKeyInput { get; }
```

- *Type:* string

---

##### `RouteSelectionExpressionInput`<sup>Optional</sup> <a name="RouteSelectionExpressionInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.routeSelectionExpressionInput"></a>

```csharp
public string RouteSelectionExpressionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `ApiKeySelectionExpression`<sup>Required</sup> <a name="ApiKeySelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.apiKeySelectionExpression"></a>

```csharp
public string ApiKeySelectionExpression { get; }
```

- *Type:* string

---

##### `BasePath`<sup>Required</sup> <a name="BasePath" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.basePath"></a>

```csharp
public string BasePath { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `CredentialsArn`<sup>Required</sup> <a name="CredentialsArn" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.credentialsArn"></a>

```csharp
public string CredentialsArn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisableExecuteApiEndpoint`<sup>Required</sup> <a name="DisableExecuteApiEndpoint" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.disableExecuteApiEndpoint"></a>

```csharp
public bool|IResolvable DisableExecuteApiEndpoint { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisableSchemaValidation`<sup>Required</sup> <a name="DisableSchemaValidation" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.disableSchemaValidation"></a>

```csharp
public bool|IResolvable DisableSchemaValidation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FailOnWarnings`<sup>Required</sup> <a name="FailOnWarnings" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.failOnWarnings"></a>

```csharp
public bool|IResolvable FailOnWarnings { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProtocolType`<sup>Required</sup> <a name="ProtocolType" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.protocolType"></a>

```csharp
public string ProtocolType { get; }
```

- *Type:* string

---

##### `RouteKey`<sup>Required</sup> <a name="RouteKey" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.routeKey"></a>

```csharp
public string RouteKey { get; }
```

- *Type:* string

---

##### `RouteSelectionExpression`<sup>Required</sup> <a name="RouteSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.routeSelectionExpression"></a>

```csharp
public string RouteSelectionExpression { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2ApiBodyS3Location <a name="Apigatewayv2ApiBodyS3Location" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Apigatewayv2ApiBodyS3Location {
    string Bucket = null,
    string Etag = null,
    string Key = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location.property.bucket">Bucket</a></code> | <code>string</code> | The S3 bucket that contains the OpenAPI definition to import. Required if you specify a ``BodyS3Location`` for an API. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location.property.etag">Etag</a></code> | <code>string</code> | The Etag of the S3 object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location.property.key">Key</a></code> | <code>string</code> | The key of the S3 object. Required if you specify a ``BodyS3Location`` for an API. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location.property.version">Version</a></code> | <code>string</code> | The version of the S3 object. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

The S3 bucket that contains the OpenAPI definition to import. Required if you specify a ``BodyS3Location`` for an API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#bucket Apigatewayv2Api#bucket}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location.property.etag"></a>

```csharp
public string Etag { get; set; }
```

- *Type:* string

The Etag of the S3 object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#etag Apigatewayv2Api#etag}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the S3 object. Required if you specify a ``BodyS3Location`` for an API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#key Apigatewayv2Api#key}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The version of the S3 object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#version Apigatewayv2Api#version}

---

### Apigatewayv2ApiConfig <a name="Apigatewayv2ApiConfig" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Apigatewayv2ApiConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApiKeySelectionExpression = null,
    string BasePath = null,
    string Body = null,
    Apigatewayv2ApiBodyS3Location BodyS3Location = null,
    Apigatewayv2ApiCorsConfiguration CorsConfiguration = null,
    string CredentialsArn = null,
    string Description = null,
    bool|IResolvable DisableExecuteApiEndpoint = null,
    bool|IResolvable DisableSchemaValidation = null,
    bool|IResolvable FailOnWarnings = null,
    string IpAddressType = null,
    string Name = null,
    string ProtocolType = null,
    string RouteKey = null,
    string RouteSelectionExpression = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string Target = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.apiKeySelectionExpression">ApiKeySelectionExpression</a></code> | <code>string</code> | An API key selection expression. Supported only for WebSocket APIs. See [API Key Selection Expressions](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions). |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.basePath">BasePath</a></code> | <code>string</code> | Specifies how to interpret the base path of the API during import. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.body">Body</a></code> | <code>string</code> | The OpenAPI definition. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.bodyS3Location">BodyS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location">Apigatewayv2ApiBodyS3Location</a></code> | The S3 location of an OpenAPI definition. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.corsConfiguration">CorsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a></code> | A CORS configuration. Supported only for HTTP APIs. See [Configuring CORS](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html) for more information. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.credentialsArn">CredentialsArn</a></code> | <code>string</code> | This property is part of quick create. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.description">Description</a></code> | <code>string</code> | The description of the API. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.disableExecuteApiEndpoint">DisableExecuteApiEndpoint</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether clients can invoke your API by using the default ``execute-api`` endpoint. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.disableSchemaValidation">DisableSchemaValidation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Avoid validating models when creating a deployment. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.failOnWarnings">FailOnWarnings</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to rollback the API creation when a warning is encountered. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | The IP address types that can invoke the API. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.name">Name</a></code> | <code>string</code> | The name of the API. Required unless you specify an OpenAPI definition for ``Body`` or ``S3BodyLocation``. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.protocolType">ProtocolType</a></code> | <code>string</code> | The API protocol. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.routeKey">RouteKey</a></code> | <code>string</code> | This property is part of quick create. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.routeSelectionExpression">RouteSelectionExpression</a></code> | <code>string</code> | The route selection expression for the API. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The collection of tags. Each tag element is associated with a given resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.target">Target</a></code> | <code>string</code> | This property is part of quick create. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.version">Version</a></code> | <code>string</code> | A version identifier for the API. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApiKeySelectionExpression`<sup>Optional</sup> <a name="ApiKeySelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.apiKeySelectionExpression"></a>

```csharp
public string ApiKeySelectionExpression { get; set; }
```

- *Type:* string

An API key selection expression. Supported only for WebSocket APIs. See [API Key Selection Expressions](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#api_key_selection_expression Apigatewayv2Api#api_key_selection_expression}

---

##### `BasePath`<sup>Optional</sup> <a name="BasePath" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.basePath"></a>

```csharp
public string BasePath { get; set; }
```

- *Type:* string

Specifies how to interpret the base path of the API during import.

Valid values are `ignore`, `prepend`, and `split`. The default value is `ignore`. To learn more, see [Set the OpenAPI basePath Property](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api-basePath.html). Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#base_path Apigatewayv2Api#base_path}

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.body"></a>

```csharp
public string Body { get; set; }
```

- *Type:* string

The OpenAPI definition.

Supported only for HTTP APIs. To import an HTTP API, you must specify a `Body` or `BodyS3Location`. If you specify a `Body` or `BodyS3Location`, don't specify CloudFormation resources such as `AWS::ApiGatewayV2::Authorizer` or `AWS::ApiGatewayV2::Route`. API Gateway doesn't support the combination of OpenAPI and CloudFormation resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#body Apigatewayv2Api#body}

---

##### `BodyS3Location`<sup>Optional</sup> <a name="BodyS3Location" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.bodyS3Location"></a>

```csharp
public Apigatewayv2ApiBodyS3Location BodyS3Location { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location">Apigatewayv2ApiBodyS3Location</a>

The S3 location of an OpenAPI definition.

Supported only for HTTP APIs. To import an HTTP API, you must specify a `Body` or `BodyS3Location`. If you specify a `Body` or `BodyS3Location`, don't specify CloudFormation resources such as `AWS::ApiGatewayV2::Authorizer` or `AWS::ApiGatewayV2::Route`. API Gateway doesn't support the combination of OpenAPI and CloudFormation resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#body_s3_location Apigatewayv2Api#body_s3_location}

---

##### `CorsConfiguration`<sup>Optional</sup> <a name="CorsConfiguration" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.corsConfiguration"></a>

```csharp
public Apigatewayv2ApiCorsConfiguration CorsConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a>

A CORS configuration. Supported only for HTTP APIs. See [Configuring CORS](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#cors_configuration Apigatewayv2Api#cors_configuration}

---

##### `CredentialsArn`<sup>Optional</sup> <a name="CredentialsArn" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.credentialsArn"></a>

```csharp
public string CredentialsArn { get; set; }
```

- *Type:* string

This property is part of quick create.

It specifies the credentials required for the integration, if any. For a Lambda integration, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify `arn:aws:iam::*:user/*`. To use resource-based permissions on supported AWS services, specify `null`. Currently, this property is not used for HTTP integrations. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#credentials_arn Apigatewayv2Api#credentials_arn}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#description Apigatewayv2Api#description}

---

##### `DisableExecuteApiEndpoint`<sup>Optional</sup> <a name="DisableExecuteApiEndpoint" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.disableExecuteApiEndpoint"></a>

```csharp
public bool|IResolvable DisableExecuteApiEndpoint { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether clients can invoke your API by using the default ``execute-api`` endpoint.

By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#disable_execute_api_endpoint Apigatewayv2Api#disable_execute_api_endpoint}

---

##### `DisableSchemaValidation`<sup>Optional</sup> <a name="DisableSchemaValidation" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.disableSchemaValidation"></a>

```csharp
public bool|IResolvable DisableSchemaValidation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Avoid validating models when creating a deployment. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#disable_schema_validation Apigatewayv2Api#disable_schema_validation}

---

##### `FailOnWarnings`<sup>Optional</sup> <a name="FailOnWarnings" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.failOnWarnings"></a>

```csharp
public bool|IResolvable FailOnWarnings { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to rollback the API creation when a warning is encountered.

By default, API creation continues if a warning is encountered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#fail_on_warnings Apigatewayv2Api#fail_on_warnings}

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

The IP address types that can invoke the API.

Use `ipv4` to allow only IPv4 addresses to invoke your API, or use `dualstack` to allow both IPv4 and IPv6 addresses to invoke your API.
Don?t use IP address type for an HTTP API based on an OpenAPI specification. Instead, specify the IP address type in the OpenAPI specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#ip_address_type Apigatewayv2Api#ip_address_type}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the API. Required unless you specify an OpenAPI definition for ``Body`` or ``S3BodyLocation``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#name Apigatewayv2Api#name}

---

##### `ProtocolType`<sup>Optional</sup> <a name="ProtocolType" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.protocolType"></a>

```csharp
public string ProtocolType { get; set; }
```

- *Type:* string

The API protocol.

Valid values are `WEBSOCKET` or `HTTP`. Required unless you specify an OpenAPI definition for `Body` or `S3BodyLocation`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#protocol_type Apigatewayv2Api#protocol_type}

---

##### `RouteKey`<sup>Optional</sup> <a name="RouteKey" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.routeKey"></a>

```csharp
public string RouteKey { get; set; }
```

- *Type:* string

This property is part of quick create.

If you don't specify a `routeKey`, a default route of `$default` is created. The `$default` route acts as a catch-all for any request made to your API, for a particular stage. The `$default` route key can't be modified. You can add routes after creating the API, and you can update the route keys of additional routes. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#route_key Apigatewayv2Api#route_key}

---

##### `RouteSelectionExpression`<sup>Optional</sup> <a name="RouteSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.routeSelectionExpression"></a>

```csharp
public string RouteSelectionExpression { get; set; }
```

- *Type:* string

The route selection expression for the API.

For HTTP APIs, the `routeSelectionExpression` must be `${request.method} ${request.path}`. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#route_selection_expression Apigatewayv2Api#route_selection_expression}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The collection of tags. Each tag element is associated with a given resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#tags Apigatewayv2Api#tags}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

This property is part of quick create.

Quick create produces an API with an integration, a default catch-all route, and a default stage which is configured to automatically deploy changes. For HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN. The type of the integration will be HTTP_PROXY or AWS_PROXY, respectively. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#target Apigatewayv2Api#target}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

A version identifier for the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#version Apigatewayv2Api#version}

---

### Apigatewayv2ApiCorsConfiguration <a name="Apigatewayv2ApiCorsConfiguration" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Apigatewayv2ApiCorsConfiguration {
    bool|IResolvable AllowCredentials = null,
    string[] AllowHeaders = null,
    string[] AllowMethods = null,
    string[] AllowOrigins = null,
    string[] ExposeHeaders = null,
    double MaxAge = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowCredentials">AllowCredentials</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether credentials are included in the CORS request. Supported only for HTTP APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowHeaders">AllowHeaders</a></code> | <code>string[]</code> | Represents a collection of allowed headers. Supported only for HTTP APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowMethods">AllowMethods</a></code> | <code>string[]</code> | Represents a collection of allowed HTTP methods. Supported only for HTTP APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowOrigins">AllowOrigins</a></code> | <code>string[]</code> | Represents a collection of allowed origins. Supported only for HTTP APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.exposeHeaders">ExposeHeaders</a></code> | <code>string[]</code> | Represents a collection of exposed headers. Supported only for HTTP APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.maxAge">MaxAge</a></code> | <code>double</code> | The number of seconds that the browser should cache preflight request results. Supported only for HTTP APIs. |

---

##### `AllowCredentials`<sup>Optional</sup> <a name="AllowCredentials" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowCredentials"></a>

```csharp
public bool|IResolvable AllowCredentials { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether credentials are included in the CORS request. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#allow_credentials Apigatewayv2Api#allow_credentials}

---

##### `AllowHeaders`<sup>Optional</sup> <a name="AllowHeaders" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowHeaders"></a>

```csharp
public string[] AllowHeaders { get; set; }
```

- *Type:* string[]

Represents a collection of allowed headers. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#allow_headers Apigatewayv2Api#allow_headers}

---

##### `AllowMethods`<sup>Optional</sup> <a name="AllowMethods" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowMethods"></a>

```csharp
public string[] AllowMethods { get; set; }
```

- *Type:* string[]

Represents a collection of allowed HTTP methods. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#allow_methods Apigatewayv2Api#allow_methods}

---

##### `AllowOrigins`<sup>Optional</sup> <a name="AllowOrigins" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowOrigins"></a>

```csharp
public string[] AllowOrigins { get; set; }
```

- *Type:* string[]

Represents a collection of allowed origins. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#allow_origins Apigatewayv2Api#allow_origins}

---

##### `ExposeHeaders`<sup>Optional</sup> <a name="ExposeHeaders" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.exposeHeaders"></a>

```csharp
public string[] ExposeHeaders { get; set; }
```

- *Type:* string[]

Represents a collection of exposed headers. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#expose_headers Apigatewayv2Api#expose_headers}

---

##### `MaxAge`<sup>Optional</sup> <a name="MaxAge" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.maxAge"></a>

```csharp
public double MaxAge { get; set; }
```

- *Type:* double

The number of seconds that the browser should cache preflight request results. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#max_age Apigatewayv2Api#max_age}

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2ApiBodyS3LocationOutputReference <a name="Apigatewayv2ApiBodyS3LocationOutputReference" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Apigatewayv2ApiBodyS3LocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetEtag` <a name="ResetEtag" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.resetEtag"></a>

```csharp
private void ResetEtag()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.etagInput">EtagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location">Apigatewayv2ApiBodyS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.etagInput"></a>

```csharp
public string EtagInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Apigatewayv2ApiBodyS3Location InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location">Apigatewayv2ApiBodyS3Location</a>

---


### Apigatewayv2ApiCorsConfigurationOutputReference <a name="Apigatewayv2ApiCorsConfigurationOutputReference" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Apigatewayv2ApiCorsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowCredentials">ResetAllowCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowHeaders">ResetAllowHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowMethods">ResetAllowMethods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowOrigins">ResetAllowOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetExposeHeaders">ResetExposeHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetMaxAge">ResetMaxAge</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowCredentials` <a name="ResetAllowCredentials" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowCredentials"></a>

```csharp
private void ResetAllowCredentials()
```

##### `ResetAllowHeaders` <a name="ResetAllowHeaders" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowHeaders"></a>

```csharp
private void ResetAllowHeaders()
```

##### `ResetAllowMethods` <a name="ResetAllowMethods" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowMethods"></a>

```csharp
private void ResetAllowMethods()
```

##### `ResetAllowOrigins` <a name="ResetAllowOrigins" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowOrigins"></a>

```csharp
private void ResetAllowOrigins()
```

##### `ResetExposeHeaders` <a name="ResetExposeHeaders" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetExposeHeaders"></a>

```csharp
private void ResetExposeHeaders()
```

##### `ResetMaxAge` <a name="ResetMaxAge" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetMaxAge"></a>

```csharp
private void ResetMaxAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowCredentialsInput">AllowCredentialsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowHeadersInput">AllowHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowMethodsInput">AllowMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowOriginsInput">AllowOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.exposeHeadersInput">ExposeHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.maxAgeInput">MaxAgeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowCredentials">AllowCredentials</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowHeaders">AllowHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowMethods">AllowMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowOrigins">AllowOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.exposeHeaders">ExposeHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.maxAge">MaxAge</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowCredentialsInput`<sup>Optional</sup> <a name="AllowCredentialsInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowCredentialsInput"></a>

```csharp
public bool|IResolvable AllowCredentialsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowHeadersInput`<sup>Optional</sup> <a name="AllowHeadersInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowHeadersInput"></a>

```csharp
public string[] AllowHeadersInput { get; }
```

- *Type:* string[]

---

##### `AllowMethodsInput`<sup>Optional</sup> <a name="AllowMethodsInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowMethodsInput"></a>

```csharp
public string[] AllowMethodsInput { get; }
```

- *Type:* string[]

---

##### `AllowOriginsInput`<sup>Optional</sup> <a name="AllowOriginsInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowOriginsInput"></a>

```csharp
public string[] AllowOriginsInput { get; }
```

- *Type:* string[]

---

##### `ExposeHeadersInput`<sup>Optional</sup> <a name="ExposeHeadersInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.exposeHeadersInput"></a>

```csharp
public string[] ExposeHeadersInput { get; }
```

- *Type:* string[]

---

##### `MaxAgeInput`<sup>Optional</sup> <a name="MaxAgeInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.maxAgeInput"></a>

```csharp
public double MaxAgeInput { get; }
```

- *Type:* double

---

##### `AllowCredentials`<sup>Required</sup> <a name="AllowCredentials" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowCredentials"></a>

```csharp
public bool|IResolvable AllowCredentials { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowHeaders`<sup>Required</sup> <a name="AllowHeaders" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowHeaders"></a>

```csharp
public string[] AllowHeaders { get; }
```

- *Type:* string[]

---

##### `AllowMethods`<sup>Required</sup> <a name="AllowMethods" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowMethods"></a>

```csharp
public string[] AllowMethods { get; }
```

- *Type:* string[]

---

##### `AllowOrigins`<sup>Required</sup> <a name="AllowOrigins" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowOrigins"></a>

```csharp
public string[] AllowOrigins { get; }
```

- *Type:* string[]

---

##### `ExposeHeaders`<sup>Required</sup> <a name="ExposeHeaders" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.exposeHeaders"></a>

```csharp
public string[] ExposeHeaders { get; }
```

- *Type:* string[]

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.maxAge"></a>

```csharp
public double MaxAge { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Apigatewayv2ApiCorsConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a>

---



