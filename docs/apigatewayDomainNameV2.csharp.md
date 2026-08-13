# `apigatewayDomainNameV2` Submodule <a name="`apigatewayDomainNameV2` Submodule" id="@cdktn/provider-awscc.apigatewayDomainNameV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayDomainNameV2 <a name="ApigatewayDomainNameV2" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_domain_name_v2 awscc_apigateway_domain_name_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayDomainNameV2(Construct Scope, string Id, ApigatewayDomainNameV2Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config">ApigatewayDomainNameV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config">ApigatewayDomainNameV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.putEndpointConfiguration">PutEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetDomainName">ResetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetEndpointAccessMode">ResetEndpointAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetEndpointConfiguration">ResetEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetRoutingMode">ResetRoutingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetSecurityPolicy">ResetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpointConfiguration` <a name="PutEndpointConfiguration" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.putEndpointConfiguration"></a>

```csharp
private void PutEndpointConfiguration(ApigatewayDomainNameV2EndpointConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.putEndpointConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfiguration">ApigatewayDomainNameV2EndpointConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.putTags"></a>

```csharp
private void PutTags(IResolvable|ApigatewayDomainNameV2Tags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Tags">ApigatewayDomainNameV2Tags</a>[]

---

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetCertificateArn"></a>

```csharp
private void ResetCertificateArn()
```

##### `ResetDomainName` <a name="ResetDomainName" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetDomainName"></a>

```csharp
private void ResetDomainName()
```

##### `ResetEndpointAccessMode` <a name="ResetEndpointAccessMode" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetEndpointAccessMode"></a>

```csharp
private void ResetEndpointAccessMode()
```

##### `ResetEndpointConfiguration` <a name="ResetEndpointConfiguration" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetEndpointConfiguration"></a>

```csharp
private void ResetEndpointConfiguration()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetPolicy"></a>

```csharp
private void ResetPolicy()
```

##### `ResetRoutingMode` <a name="ResetRoutingMode" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetRoutingMode"></a>

```csharp
private void ResetRoutingMode()
```

##### `ResetSecurityPolicy` <a name="ResetSecurityPolicy" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetSecurityPolicy"></a>

```csharp
private void ResetSecurityPolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApigatewayDomainNameV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayDomainNameV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayDomainNameV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayDomainNameV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayDomainNameV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApigatewayDomainNameV2 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigatewayDomainNameV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigatewayDomainNameV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_domain_name_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayDomainNameV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.domainNameArn">DomainNameArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.domainNameId">DomainNameId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.endpointConfiguration">EndpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference">ApigatewayDomainNameV2EndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList">ApigatewayDomainNameV2TagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.certificateArnInput">CertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.endpointAccessModeInput">EndpointAccessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.endpointConfigurationInput">EndpointConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfiguration">ApigatewayDomainNameV2EndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.routingModeInput">RoutingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.securityPolicyInput">SecurityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Tags">ApigatewayDomainNameV2Tags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.endpointAccessMode">EndpointAccessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.routingMode">RoutingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DomainNameArn`<sup>Required</sup> <a name="DomainNameArn" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.domainNameArn"></a>

```csharp
public string DomainNameArn { get; }
```

- *Type:* string

---

##### `DomainNameId`<sup>Required</sup> <a name="DomainNameId" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.domainNameId"></a>

```csharp
public string DomainNameId { get; }
```

- *Type:* string

---

##### `EndpointConfiguration`<sup>Required</sup> <a name="EndpointConfiguration" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.endpointConfiguration"></a>

```csharp
public ApigatewayDomainNameV2EndpointConfigurationOutputReference EndpointConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference">ApigatewayDomainNameV2EndpointConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.tags"></a>

```csharp
public ApigatewayDomainNameV2TagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList">ApigatewayDomainNameV2TagsList</a>

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.certificateArnInput"></a>

```csharp
public string CertificateArnInput { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `EndpointAccessModeInput`<sup>Optional</sup> <a name="EndpointAccessModeInput" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.endpointAccessModeInput"></a>

```csharp
public string EndpointAccessModeInput { get; }
```

- *Type:* string

---

##### `EndpointConfigurationInput`<sup>Optional</sup> <a name="EndpointConfigurationInput" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.endpointConfigurationInput"></a>

```csharp
public IResolvable|ApigatewayDomainNameV2EndpointConfiguration EndpointConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfiguration">ApigatewayDomainNameV2EndpointConfiguration</a>

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `RoutingModeInput`<sup>Optional</sup> <a name="RoutingModeInput" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.routingModeInput"></a>

```csharp
public string RoutingModeInput { get; }
```

- *Type:* string

---

##### `SecurityPolicyInput`<sup>Optional</sup> <a name="SecurityPolicyInput" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.securityPolicyInput"></a>

```csharp
public string SecurityPolicyInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.tagsInput"></a>

```csharp
public IResolvable|ApigatewayDomainNameV2Tags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Tags">ApigatewayDomainNameV2Tags</a>[]

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `EndpointAccessMode`<sup>Required</sup> <a name="EndpointAccessMode" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.endpointAccessMode"></a>

```csharp
public string EndpointAccessMode { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `RoutingMode`<sup>Required</sup> <a name="RoutingMode" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.routingMode"></a>

```csharp
public string RoutingMode { get; }
```

- *Type:* string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayDomainNameV2Config <a name="ApigatewayDomainNameV2Config" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayDomainNameV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CertificateArn = null,
    string DomainName = null,
    string EndpointAccessMode = null,
    ApigatewayDomainNameV2EndpointConfiguration EndpointConfiguration = null,
    string Policy = null,
    string RoutingMode = null,
    string SecurityPolicy = null,
    IResolvable|ApigatewayDomainNameV2Tags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.certificateArn">CertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_domain_name_v2#certificate_arn ApigatewayDomainNameV2#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_domain_name_v2#domain_name ApigatewayDomainNameV2#domain_name}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.endpointAccessMode">EndpointAccessMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_domain_name_v2#endpoint_access_mode ApigatewayDomainNameV2#endpoint_access_mode}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.endpointConfiguration">EndpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfiguration">ApigatewayDomainNameV2EndpointConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_domain_name_v2#endpoint_configuration ApigatewayDomainNameV2#endpoint_configuration}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.policy">Policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_domain_name_v2#policy ApigatewayDomainNameV2#policy}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.routingMode">RoutingMode</a></code> | <code>string</code> | The valid routing modes are [BASE_PATH_MAPPING_ONLY], [ROUTING_RULE_THEN_BASE_PATH_MAPPING] and [ROUTING_RULE_ONLY]. All other inputs are invalid. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_domain_name_v2#security_policy ApigatewayDomainNameV2#security_policy}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Tags">ApigatewayDomainNameV2Tags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_domain_name_v2#tags ApigatewayDomainNameV2#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.certificateArn"></a>

```csharp
public string CertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_domain_name_v2#certificate_arn ApigatewayDomainNameV2#certificate_arn}.

---

##### `DomainName`<sup>Optional</sup> <a name="DomainName" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_domain_name_v2#domain_name ApigatewayDomainNameV2#domain_name}.

---

##### `EndpointAccessMode`<sup>Optional</sup> <a name="EndpointAccessMode" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.endpointAccessMode"></a>

```csharp
public string EndpointAccessMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_domain_name_v2#endpoint_access_mode ApigatewayDomainNameV2#endpoint_access_mode}.

---

##### `EndpointConfiguration`<sup>Optional</sup> <a name="EndpointConfiguration" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.endpointConfiguration"></a>

```csharp
public ApigatewayDomainNameV2EndpointConfiguration EndpointConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfiguration">ApigatewayDomainNameV2EndpointConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_domain_name_v2#endpoint_configuration ApigatewayDomainNameV2#endpoint_configuration}.

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_domain_name_v2#policy ApigatewayDomainNameV2#policy}.

---

##### `RoutingMode`<sup>Optional</sup> <a name="RoutingMode" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.routingMode"></a>

```csharp
public string RoutingMode { get; set; }
```

- *Type:* string

The valid routing modes are [BASE_PATH_MAPPING_ONLY], [ROUTING_RULE_THEN_BASE_PATH_MAPPING] and [ROUTING_RULE_ONLY]. All other inputs are invalid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_domain_name_v2#routing_mode ApigatewayDomainNameV2#routing_mode}

---

##### `SecurityPolicy`<sup>Optional</sup> <a name="SecurityPolicy" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_domain_name_v2#security_policy ApigatewayDomainNameV2#security_policy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.tags"></a>

```csharp
public IResolvable|ApigatewayDomainNameV2Tags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Tags">ApigatewayDomainNameV2Tags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_domain_name_v2#tags ApigatewayDomainNameV2#tags}.

---

### ApigatewayDomainNameV2EndpointConfiguration <a name="ApigatewayDomainNameV2EndpointConfiguration" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayDomainNameV2EndpointConfiguration {
    string IpAddressType = null,
    string[] Types = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfiguration.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_domain_name_v2#ip_address_type ApigatewayDomainNameV2#ip_address_type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfiguration.property.types">Types</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_domain_name_v2#types ApigatewayDomainNameV2#types}. |

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfiguration.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_domain_name_v2#ip_address_type ApigatewayDomainNameV2#ip_address_type}.

---

##### `Types`<sup>Optional</sup> <a name="Types" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfiguration.property.types"></a>

```csharp
public string[] Types { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_domain_name_v2#types ApigatewayDomainNameV2#types}.

---

### ApigatewayDomainNameV2Tags <a name="ApigatewayDomainNameV2Tags" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Tags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Tags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayDomainNameV2Tags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Tags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_domain_name_v2#key ApigatewayDomainNameV2#key}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Tags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_domain_name_v2#value ApigatewayDomainNameV2#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Tags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_domain_name_v2#key ApigatewayDomainNameV2#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Tags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_domain_name_v2#value ApigatewayDomainNameV2#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayDomainNameV2EndpointConfigurationOutputReference <a name="ApigatewayDomainNameV2EndpointConfigurationOutputReference" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayDomainNameV2EndpointConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.resetTypes">ResetTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```

##### `ResetTypes` <a name="ResetTypes" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.resetTypes"></a>

```csharp
private void ResetTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.property.typesInput">TypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.property.types">Types</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfiguration">ApigatewayDomainNameV2EndpointConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `TypesInput`<sup>Optional</sup> <a name="TypesInput" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.property.typesInput"></a>

```csharp
public string[] TypesInput { get; }
```

- *Type:* string[]

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.property.types"></a>

```csharp
public string[] Types { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayDomainNameV2EndpointConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfiguration">ApigatewayDomainNameV2EndpointConfiguration</a>

---


### ApigatewayDomainNameV2TagsList <a name="ApigatewayDomainNameV2TagsList" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayDomainNameV2TagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.get"></a>

```csharp
private ApigatewayDomainNameV2TagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Tags">ApigatewayDomainNameV2Tags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayDomainNameV2Tags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Tags">ApigatewayDomainNameV2Tags</a>[]

---


### ApigatewayDomainNameV2TagsOutputReference <a name="ApigatewayDomainNameV2TagsOutputReference" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayDomainNameV2TagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Tags">ApigatewayDomainNameV2Tags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayDomainNameV2Tags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Tags">ApigatewayDomainNameV2Tags</a>

---



