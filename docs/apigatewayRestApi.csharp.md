# `apigatewayRestApi` Submodule <a name="`apigatewayRestApi` Submodule" id="@cdktn/provider-awscc.apigatewayRestApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayRestApi <a name="ApigatewayRestApi" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api awscc_apigateway_rest_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayRestApi(Construct Scope, string Id, ApigatewayRestApiConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig">ApigatewayRestApiConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig">ApigatewayRestApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putBodyS3Location">PutBodyS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putEndpointConfiguration">PutEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetApiKeySourceType">ResetApiKeySourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetBinaryMediaTypes">ResetBinaryMediaTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetBodyS3Location">ResetBodyS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetCloneFrom">ResetCloneFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetDisableExecuteApiEndpoint">ResetDisableExecuteApiEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetEndpointAccessMode">ResetEndpointAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetEndpointConfiguration">ResetEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetFailOnWarnings">ResetFailOnWarnings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetMinimumCompressionSize">ResetMinimumCompressionSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetSecurityPolicy">ResetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBodyS3Location` <a name="PutBodyS3Location" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putBodyS3Location"></a>

```csharp
private void PutBodyS3Location(ApigatewayRestApiBodyS3Location Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putBodyS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a>

---

##### `PutEndpointConfiguration` <a name="PutEndpointConfiguration" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putEndpointConfiguration"></a>

```csharp
private void PutEndpointConfiguration(ApigatewayRestApiEndpointConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putEndpointConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putTags"></a>

```csharp
private void PutTags(IResolvable|ApigatewayRestApiTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>[]

---

##### `ResetApiKeySourceType` <a name="ResetApiKeySourceType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetApiKeySourceType"></a>

```csharp
private void ResetApiKeySourceType()
```

##### `ResetBinaryMediaTypes` <a name="ResetBinaryMediaTypes" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetBinaryMediaTypes"></a>

```csharp
private void ResetBinaryMediaTypes()
```

##### `ResetBody` <a name="ResetBody" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetBody"></a>

```csharp
private void ResetBody()
```

##### `ResetBodyS3Location` <a name="ResetBodyS3Location" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetBodyS3Location"></a>

```csharp
private void ResetBodyS3Location()
```

##### `ResetCloneFrom` <a name="ResetCloneFrom" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetCloneFrom"></a>

```csharp
private void ResetCloneFrom()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisableExecuteApiEndpoint` <a name="ResetDisableExecuteApiEndpoint" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetDisableExecuteApiEndpoint"></a>

```csharp
private void ResetDisableExecuteApiEndpoint()
```

##### `ResetEndpointAccessMode` <a name="ResetEndpointAccessMode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetEndpointAccessMode"></a>

```csharp
private void ResetEndpointAccessMode()
```

##### `ResetEndpointConfiguration` <a name="ResetEndpointConfiguration" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetEndpointConfiguration"></a>

```csharp
private void ResetEndpointConfiguration()
```

##### `ResetFailOnWarnings` <a name="ResetFailOnWarnings" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetFailOnWarnings"></a>

```csharp
private void ResetFailOnWarnings()
```

##### `ResetMinimumCompressionSize` <a name="ResetMinimumCompressionSize" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetMinimumCompressionSize"></a>

```csharp
private void ResetMinimumCompressionSize()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetPolicy"></a>

```csharp
private void ResetPolicy()
```

##### `ResetSecurityPolicy` <a name="ResetSecurityPolicy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetSecurityPolicy"></a>

```csharp
private void ResetSecurityPolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApigatewayRestApi resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayRestApi.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayRestApi.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayRestApi.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayRestApi.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApigatewayRestApi resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigatewayRestApi to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigatewayRestApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayRestApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.bodyS3Location">BodyS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference">ApigatewayRestApiBodyS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointConfiguration">EndpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference">ApigatewayRestApiEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.restApiId">RestApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.rootResourceId">RootResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList">ApigatewayRestApiTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.apiKeySourceTypeInput">ApiKeySourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.binaryMediaTypesInput">BinaryMediaTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.bodyInput">BodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.bodyS3LocationInput">BodyS3LocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.cloneFromInput">CloneFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.disableExecuteApiEndpointInput">DisableExecuteApiEndpointInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointAccessModeInput">EndpointAccessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointConfigurationInput">EndpointConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.failOnWarningsInput">FailOnWarningsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.minimumCompressionSizeInput">MinimumCompressionSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.parametersInput">ParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.securityPolicyInput">SecurityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.apiKeySourceType">ApiKeySourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.binaryMediaTypes">BinaryMediaTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.cloneFrom">CloneFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.disableExecuteApiEndpoint">DisableExecuteApiEndpoint</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointAccessMode">EndpointAccessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.failOnWarnings">FailOnWarnings</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.minimumCompressionSize">MinimumCompressionSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.parameters">Parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BodyS3Location`<sup>Required</sup> <a name="BodyS3Location" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.bodyS3Location"></a>

```csharp
public ApigatewayRestApiBodyS3LocationOutputReference BodyS3Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference">ApigatewayRestApiBodyS3LocationOutputReference</a>

---

##### `EndpointConfiguration`<sup>Required</sup> <a name="EndpointConfiguration" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointConfiguration"></a>

```csharp
public ApigatewayRestApiEndpointConfigurationOutputReference EndpointConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference">ApigatewayRestApiEndpointConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.restApiId"></a>

```csharp
public string RestApiId { get; }
```

- *Type:* string

---

##### `RootResourceId`<sup>Required</sup> <a name="RootResourceId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.rootResourceId"></a>

```csharp
public string RootResourceId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.tags"></a>

```csharp
public ApigatewayRestApiTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList">ApigatewayRestApiTagsList</a>

---

##### `ApiKeySourceTypeInput`<sup>Optional</sup> <a name="ApiKeySourceTypeInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.apiKeySourceTypeInput"></a>

```csharp
public string ApiKeySourceTypeInput { get; }
```

- *Type:* string

---

##### `BinaryMediaTypesInput`<sup>Optional</sup> <a name="BinaryMediaTypesInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.binaryMediaTypesInput"></a>

```csharp
public string[] BinaryMediaTypesInput { get; }
```

- *Type:* string[]

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.bodyInput"></a>

```csharp
public string BodyInput { get; }
```

- *Type:* string

---

##### `BodyS3LocationInput`<sup>Optional</sup> <a name="BodyS3LocationInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.bodyS3LocationInput"></a>

```csharp
public IResolvable|ApigatewayRestApiBodyS3Location BodyS3LocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a>

---

##### `CloneFromInput`<sup>Optional</sup> <a name="CloneFromInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.cloneFromInput"></a>

```csharp
public string CloneFromInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisableExecuteApiEndpointInput`<sup>Optional</sup> <a name="DisableExecuteApiEndpointInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.disableExecuteApiEndpointInput"></a>

```csharp
public bool|IResolvable DisableExecuteApiEndpointInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EndpointAccessModeInput`<sup>Optional</sup> <a name="EndpointAccessModeInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointAccessModeInput"></a>

```csharp
public string EndpointAccessModeInput { get; }
```

- *Type:* string

---

##### `EndpointConfigurationInput`<sup>Optional</sup> <a name="EndpointConfigurationInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointConfigurationInput"></a>

```csharp
public IResolvable|ApigatewayRestApiEndpointConfiguration EndpointConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a>

---

##### `FailOnWarningsInput`<sup>Optional</sup> <a name="FailOnWarningsInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.failOnWarningsInput"></a>

```csharp
public bool|IResolvable FailOnWarningsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MinimumCompressionSizeInput`<sup>Optional</sup> <a name="MinimumCompressionSizeInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.minimumCompressionSizeInput"></a>

```csharp
public double MinimumCompressionSizeInput { get; }
```

- *Type:* double

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.parametersInput"></a>

```csharp
public string ParametersInput { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `SecurityPolicyInput`<sup>Optional</sup> <a name="SecurityPolicyInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.securityPolicyInput"></a>

```csharp
public string SecurityPolicyInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.tagsInput"></a>

```csharp
public IResolvable|ApigatewayRestApiTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>[]

---

##### `ApiKeySourceType`<sup>Required</sup> <a name="ApiKeySourceType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.apiKeySourceType"></a>

```csharp
public string ApiKeySourceType { get; }
```

- *Type:* string

---

##### `BinaryMediaTypes`<sup>Required</sup> <a name="BinaryMediaTypes" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.binaryMediaTypes"></a>

```csharp
public string[] BinaryMediaTypes { get; }
```

- *Type:* string[]

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `CloneFrom`<sup>Required</sup> <a name="CloneFrom" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.cloneFrom"></a>

```csharp
public string CloneFrom { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisableExecuteApiEndpoint`<sup>Required</sup> <a name="DisableExecuteApiEndpoint" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.disableExecuteApiEndpoint"></a>

```csharp
public bool|IResolvable DisableExecuteApiEndpoint { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EndpointAccessMode`<sup>Required</sup> <a name="EndpointAccessMode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointAccessMode"></a>

```csharp
public string EndpointAccessMode { get; }
```

- *Type:* string

---

##### `FailOnWarnings`<sup>Required</sup> <a name="FailOnWarnings" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.failOnWarnings"></a>

```csharp
public bool|IResolvable FailOnWarnings { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MinimumCompressionSize`<sup>Required</sup> <a name="MinimumCompressionSize" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.minimumCompressionSize"></a>

```csharp
public double MinimumCompressionSize { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.parameters"></a>

```csharp
public string Parameters { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayRestApiBodyS3Location <a name="ApigatewayRestApiBodyS3Location" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayRestApiBodyS3Location {
    string Bucket = null,
    string ETag = null,
    string Key = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.bucket">Bucket</a></code> | <code>string</code> | The name of the S3 bucket where the OpenAPI file is stored. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.eTag">ETag</a></code> | <code>string</code> | The Amazon S3 ETag (a file checksum) of the OpenAPI file. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.key">Key</a></code> | <code>string</code> | The file name of the OpenAPI file (Amazon S3 object name). |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.version">Version</a></code> | <code>string</code> | For versioning-enabled buckets, a specific version of the OpenAPI file. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

The name of the S3 bucket where the OpenAPI file is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#bucket ApigatewayRestApi#bucket}

---

##### `ETag`<sup>Optional</sup> <a name="ETag" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.eTag"></a>

```csharp
public string ETag { get; set; }
```

- *Type:* string

The Amazon S3 ETag (a file checksum) of the OpenAPI file.

If you don't specify a value, API Gateway skips ETag validation of your OpenAPI file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#e_tag ApigatewayRestApi#e_tag}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The file name of the OpenAPI file (Amazon S3 object name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#key ApigatewayRestApi#key}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

For versioning-enabled buckets, a specific version of the OpenAPI file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#version ApigatewayRestApi#version}

---

### ApigatewayRestApiConfig <a name="ApigatewayRestApiConfig" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayRestApiConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApiKeySourceType = null,
    string[] BinaryMediaTypes = null,
    string Body = null,
    ApigatewayRestApiBodyS3Location BodyS3Location = null,
    string CloneFrom = null,
    string Description = null,
    bool|IResolvable DisableExecuteApiEndpoint = null,
    string EndpointAccessMode = null,
    ApigatewayRestApiEndpointConfiguration EndpointConfiguration = null,
    bool|IResolvable FailOnWarnings = null,
    double MinimumCompressionSize = null,
    string Mode = null,
    string Name = null,
    string Parameters = null,
    string Policy = null,
    string SecurityPolicy = null,
    IResolvable|ApigatewayRestApiTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.apiKeySourceType">ApiKeySourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#api_key_source_type ApigatewayRestApi#api_key_source_type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.binaryMediaTypes">BinaryMediaTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#binary_media_types ApigatewayRestApi#binary_media_types}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.body">Body</a></code> | <code>string</code> | An OpenAPI specification that defines a set of RESTful APIs in JSON format. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.bodyS3Location">BodyS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a></code> | The Amazon Simple Storage Service (Amazon S3) location that points to an OpenAPI file, which defines a set of RESTful APIs in JSON or YAML format. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.cloneFrom">CloneFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#clone_from ApigatewayRestApi#clone_from}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#description ApigatewayRestApi#description}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.disableExecuteApiEndpoint">DisableExecuteApiEndpoint</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#disable_execute_api_endpoint ApigatewayRestApi#disable_execute_api_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.endpointAccessMode">EndpointAccessMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#endpoint_access_mode ApigatewayRestApi#endpoint_access_mode}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.endpointConfiguration">EndpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a></code> | A list of the endpoint types and IP address types of the API. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.failOnWarnings">FailOnWarnings</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#fail_on_warnings ApigatewayRestApi#fail_on_warnings}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.minimumCompressionSize">MinimumCompressionSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#minimum_compression_size ApigatewayRestApi#minimum_compression_size}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.mode">Mode</a></code> | <code>string</code> | This property applies only when you use OpenAPI to define your REST API. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.name">Name</a></code> | <code>string</code> | The name of the RestApi. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.parameters">Parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#parameters ApigatewayRestApi#parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.policy">Policy</a></code> | <code>string</code> | A policy document that contains the permissions for the ``RestApi`` resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#security_policy ApigatewayRestApi#security_policy}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#tags ApigatewayRestApi#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApiKeySourceType`<sup>Optional</sup> <a name="ApiKeySourceType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.apiKeySourceType"></a>

```csharp
public string ApiKeySourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#api_key_source_type ApigatewayRestApi#api_key_source_type}.

---

##### `BinaryMediaTypes`<sup>Optional</sup> <a name="BinaryMediaTypes" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.binaryMediaTypes"></a>

```csharp
public string[] BinaryMediaTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#binary_media_types ApigatewayRestApi#binary_media_types}.

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.body"></a>

```csharp
public string Body { get; set; }
```

- *Type:* string

An OpenAPI specification that defines a set of RESTful APIs in JSON format.

For YAML templates, you can also provide the specification in YAML format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#body ApigatewayRestApi#body}

---

##### `BodyS3Location`<sup>Optional</sup> <a name="BodyS3Location" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.bodyS3Location"></a>

```csharp
public ApigatewayRestApiBodyS3Location BodyS3Location { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a>

The Amazon Simple Storage Service (Amazon S3) location that points to an OpenAPI file, which defines a set of RESTful APIs in JSON or YAML format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#body_s3_location ApigatewayRestApi#body_s3_location}

---

##### `CloneFrom`<sup>Optional</sup> <a name="CloneFrom" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.cloneFrom"></a>

```csharp
public string CloneFrom { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#clone_from ApigatewayRestApi#clone_from}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#description ApigatewayRestApi#description}.

---

##### `DisableExecuteApiEndpoint`<sup>Optional</sup> <a name="DisableExecuteApiEndpoint" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.disableExecuteApiEndpoint"></a>

```csharp
public bool|IResolvable DisableExecuteApiEndpoint { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#disable_execute_api_endpoint ApigatewayRestApi#disable_execute_api_endpoint}.

---

##### `EndpointAccessMode`<sup>Optional</sup> <a name="EndpointAccessMode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.endpointAccessMode"></a>

```csharp
public string EndpointAccessMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#endpoint_access_mode ApigatewayRestApi#endpoint_access_mode}.

---

##### `EndpointConfiguration`<sup>Optional</sup> <a name="EndpointConfiguration" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.endpointConfiguration"></a>

```csharp
public ApigatewayRestApiEndpointConfiguration EndpointConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a>

A list of the endpoint types and IP address types of the API.

Use this property when creating an API. When importing an existing API, specify the endpoint configuration types using the `Parameters` property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#endpoint_configuration ApigatewayRestApi#endpoint_configuration}

---

##### `FailOnWarnings`<sup>Optional</sup> <a name="FailOnWarnings" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.failOnWarnings"></a>

```csharp
public bool|IResolvable FailOnWarnings { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#fail_on_warnings ApigatewayRestApi#fail_on_warnings}.

---

##### `MinimumCompressionSize`<sup>Optional</sup> <a name="MinimumCompressionSize" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.minimumCompressionSize"></a>

```csharp
public double MinimumCompressionSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#minimum_compression_size ApigatewayRestApi#minimum_compression_size}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

This property applies only when you use OpenAPI to define your REST API.

The `Mode` determines how API Gateway handles resource updates.
Valid values are `overwrite` or `merge`.
For `overwrite`, the new API definition replaces the existing one. The existing API identifier remains unchanged.
For `merge`, the new API definition is merged with the existing API.
If you don't specify this property, a default value is chosen. For REST APIs created before March 29, 2021, the default is `overwrite`. For REST APIs created after March 29, 2021, the new API definition takes precedence, but any container types such as endpoint configurations and binary media types are merged with the existing API.
Use the default mode to define top-level `RestApi` properties in addition to using OpenAPI. Generally, it's preferred to use API Gateway's OpenAPI extensions to model these properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#mode ApigatewayRestApi#mode}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the RestApi.

A name is required if the REST API is not based on an OpenAPI specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#name ApigatewayRestApi#name}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.parameters"></a>

```csharp
public string Parameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#parameters ApigatewayRestApi#parameters}.

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

A policy document that contains the permissions for the ``RestApi`` resource.

To set the ARN for the policy, use the `!Join` intrinsic function with `""` as delimiter and values of `"execute-api:/"` and `"*"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#policy ApigatewayRestApi#policy}

---

##### `SecurityPolicy`<sup>Optional</sup> <a name="SecurityPolicy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#security_policy ApigatewayRestApi#security_policy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.tags"></a>

```csharp
public IResolvable|ApigatewayRestApiTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#tags ApigatewayRestApi#tags}.

---

### ApigatewayRestApiEndpointConfiguration <a name="ApigatewayRestApiEndpointConfiguration" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayRestApiEndpointConfiguration {
    string IpAddressType = null,
    string[] Types = null,
    string[] VpcEndpointIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#ip_address_type ApigatewayRestApi#ip_address_type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.property.types">Types</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#types ApigatewayRestApi#types}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.property.vpcEndpointIds">VpcEndpointIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#vpc_endpoint_ids ApigatewayRestApi#vpc_endpoint_ids}. |

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#ip_address_type ApigatewayRestApi#ip_address_type}.

---

##### `Types`<sup>Optional</sup> <a name="Types" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.property.types"></a>

```csharp
public string[] Types { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#types ApigatewayRestApi#types}.

---

##### `VpcEndpointIds`<sup>Optional</sup> <a name="VpcEndpointIds" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.property.vpcEndpointIds"></a>

```csharp
public string[] VpcEndpointIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#vpc_endpoint_ids ApigatewayRestApi#vpc_endpoint_ids}.

---

### ApigatewayRestApiTags <a name="ApigatewayRestApiTags" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayRestApiTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags.property.key">Key</a></code> | <code>string</code> | A string you can use to assign a value. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags.property.value">Value</a></code> | <code>string</code> | The value for the specified tag key. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A string you can use to assign a value.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#key ApigatewayRestApi#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#value ApigatewayRestApi#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayRestApiBodyS3LocationOutputReference <a name="ApigatewayRestApiBodyS3LocationOutputReference" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayRestApiBodyS3LocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetETag">ResetETag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetETag` <a name="ResetETag" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetETag"></a>

```csharp
private void ResetETag()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.eTagInput">ETagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.eTag">ETag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `ETagInput`<sup>Optional</sup> <a name="ETagInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.eTagInput"></a>

```csharp
public string ETagInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `ETag`<sup>Required</sup> <a name="ETag" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.eTag"></a>

```csharp
public string ETag { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayRestApiBodyS3Location InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a>

---


### ApigatewayRestApiEndpointConfigurationOutputReference <a name="ApigatewayRestApiEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayRestApiEndpointConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resetTypes">ResetTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resetVpcEndpointIds">ResetVpcEndpointIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```

##### `ResetTypes` <a name="ResetTypes" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resetTypes"></a>

```csharp
private void ResetTypes()
```

##### `ResetVpcEndpointIds` <a name="ResetVpcEndpointIds" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resetVpcEndpointIds"></a>

```csharp
private void ResetVpcEndpointIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.typesInput">TypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIdsInput">VpcEndpointIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.types">Types</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIds">VpcEndpointIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `TypesInput`<sup>Optional</sup> <a name="TypesInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.typesInput"></a>

```csharp
public string[] TypesInput { get; }
```

- *Type:* string[]

---

##### `VpcEndpointIdsInput`<sup>Optional</sup> <a name="VpcEndpointIdsInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIdsInput"></a>

```csharp
public string[] VpcEndpointIdsInput { get; }
```

- *Type:* string[]

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.types"></a>

```csharp
public string[] Types { get; }
```

- *Type:* string[]

---

##### `VpcEndpointIds`<sup>Required</sup> <a name="VpcEndpointIds" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIds"></a>

```csharp
public string[] VpcEndpointIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayRestApiEndpointConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a>

---


### ApigatewayRestApiTagsList <a name="ApigatewayRestApiTagsList" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayRestApiTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.get"></a>

```csharp
private ApigatewayRestApiTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayRestApiTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>[]

---


### ApigatewayRestApiTagsOutputReference <a name="ApigatewayRestApiTagsOutputReference" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayRestApiTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayRestApiTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>

---



