# `redshiftRedshiftIdcApplication` Submodule <a name="`redshiftRedshiftIdcApplication` Submodule" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftRedshiftIdcApplication <a name="RedshiftRedshiftIdcApplication" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application awscc_redshift_redshift_idc_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftRedshiftIdcApplication(Construct Scope, string Id, RedshiftRedshiftIdcApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig">RedshiftRedshiftIdcApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig">RedshiftRedshiftIdcApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putAuthorizedTokenIssuerList">PutAuthorizedTokenIssuerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putServiceIntegrations">PutServiceIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetApplicationType">ResetApplicationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetAuthorizedTokenIssuerList">ResetAuthorizedTokenIssuerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetIdentityNamespace">ResetIdentityNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetServiceIntegrations">ResetServiceIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetSsoTagKeys">ResetSsoTagKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthorizedTokenIssuerList` <a name="PutAuthorizedTokenIssuerList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putAuthorizedTokenIssuerList"></a>

```csharp
private void PutAuthorizedTokenIssuerList(IResolvable|RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putAuthorizedTokenIssuerList.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a>[]

---

##### `PutServiceIntegrations` <a name="PutServiceIntegrations" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putServiceIntegrations"></a>

```csharp
private void PutServiceIntegrations(IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putServiceIntegrations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations">RedshiftRedshiftIdcApplicationServiceIntegrations</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putTags"></a>

```csharp
private void PutTags(IResolvable|RedshiftRedshiftIdcApplicationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags">RedshiftRedshiftIdcApplicationTags</a>[]

---

##### `ResetApplicationType` <a name="ResetApplicationType" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetApplicationType"></a>

```csharp
private void ResetApplicationType()
```

##### `ResetAuthorizedTokenIssuerList` <a name="ResetAuthorizedTokenIssuerList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetAuthorizedTokenIssuerList"></a>

```csharp
private void ResetAuthorizedTokenIssuerList()
```

##### `ResetIdentityNamespace` <a name="ResetIdentityNamespace" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetIdentityNamespace"></a>

```csharp
private void ResetIdentityNamespace()
```

##### `ResetServiceIntegrations` <a name="ResetServiceIntegrations" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetServiceIntegrations"></a>

```csharp
private void ResetServiceIntegrations()
```

##### `ResetSsoTagKeys` <a name="ResetSsoTagKeys" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetSsoTagKeys"></a>

```csharp
private void ResetSsoTagKeys()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftRedshiftIdcApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RedshiftRedshiftIdcApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RedshiftRedshiftIdcApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RedshiftRedshiftIdcApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RedshiftRedshiftIdcApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RedshiftRedshiftIdcApplication resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedshiftRedshiftIdcApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedshiftRedshiftIdcApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftRedshiftIdcApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.authorizedTokenIssuerList">AuthorizedTokenIssuerList</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcManagedApplicationArn">IdcManagedApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcOnboardStatus">IdcOnboardStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.redshiftIdcApplicationArn">RedshiftIdcApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.serviceIntegrations">ServiceIntegrations</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList">RedshiftRedshiftIdcApplicationServiceIntegrationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList">RedshiftRedshiftIdcApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.applicationTypeInput">ApplicationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.authorizedTokenIssuerListInput">AuthorizedTokenIssuerListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcDisplayNameInput">IdcDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcInstanceArnInput">IdcInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.identityNamespaceInput">IdentityNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.redshiftIdcApplicationNameInput">RedshiftIdcApplicationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.serviceIntegrationsInput">ServiceIntegrationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations">RedshiftRedshiftIdcApplicationServiceIntegrations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.ssoTagKeysInput">SsoTagKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags">RedshiftRedshiftIdcApplicationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.applicationType">ApplicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcDisplayName">IdcDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcInstanceArn">IdcInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.identityNamespace">IdentityNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.redshiftIdcApplicationName">RedshiftIdcApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.ssoTagKeys">SsoTagKeys</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AuthorizedTokenIssuerList`<sup>Required</sup> <a name="AuthorizedTokenIssuerList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.authorizedTokenIssuerList"></a>

```csharp
public RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList AuthorizedTokenIssuerList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcManagedApplicationArn`<sup>Required</sup> <a name="IdcManagedApplicationArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcManagedApplicationArn"></a>

```csharp
public string IdcManagedApplicationArn { get; }
```

- *Type:* string

---

##### `IdcOnboardStatus`<sup>Required</sup> <a name="IdcOnboardStatus" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcOnboardStatus"></a>

```csharp
public string IdcOnboardStatus { get; }
```

- *Type:* string

---

##### `RedshiftIdcApplicationArn`<sup>Required</sup> <a name="RedshiftIdcApplicationArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.redshiftIdcApplicationArn"></a>

```csharp
public string RedshiftIdcApplicationArn { get; }
```

- *Type:* string

---

##### `ServiceIntegrations`<sup>Required</sup> <a name="ServiceIntegrations" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.serviceIntegrations"></a>

```csharp
public RedshiftRedshiftIdcApplicationServiceIntegrationsList ServiceIntegrations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList">RedshiftRedshiftIdcApplicationServiceIntegrationsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.tags"></a>

```csharp
public RedshiftRedshiftIdcApplicationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList">RedshiftRedshiftIdcApplicationTagsList</a>

---

##### `ApplicationTypeInput`<sup>Optional</sup> <a name="ApplicationTypeInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.applicationTypeInput"></a>

```csharp
public string ApplicationTypeInput { get; }
```

- *Type:* string

---

##### `AuthorizedTokenIssuerListInput`<sup>Optional</sup> <a name="AuthorizedTokenIssuerListInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.authorizedTokenIssuerListInput"></a>

```csharp
public IResolvable|RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct[] AuthorizedTokenIssuerListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a>[]

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.iamRoleArnInput"></a>

```csharp
public string IamRoleArnInput { get; }
```

- *Type:* string

---

##### `IdcDisplayNameInput`<sup>Optional</sup> <a name="IdcDisplayNameInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcDisplayNameInput"></a>

```csharp
public string IdcDisplayNameInput { get; }
```

- *Type:* string

---

##### `IdcInstanceArnInput`<sup>Optional</sup> <a name="IdcInstanceArnInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcInstanceArnInput"></a>

```csharp
public string IdcInstanceArnInput { get; }
```

- *Type:* string

---

##### `IdentityNamespaceInput`<sup>Optional</sup> <a name="IdentityNamespaceInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.identityNamespaceInput"></a>

```csharp
public string IdentityNamespaceInput { get; }
```

- *Type:* string

---

##### `RedshiftIdcApplicationNameInput`<sup>Optional</sup> <a name="RedshiftIdcApplicationNameInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.redshiftIdcApplicationNameInput"></a>

```csharp
public string RedshiftIdcApplicationNameInput { get; }
```

- *Type:* string

---

##### `ServiceIntegrationsInput`<sup>Optional</sup> <a name="ServiceIntegrationsInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.serviceIntegrationsInput"></a>

```csharp
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrations[] ServiceIntegrationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations">RedshiftRedshiftIdcApplicationServiceIntegrations</a>[]

---

##### `SsoTagKeysInput`<sup>Optional</sup> <a name="SsoTagKeysInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.ssoTagKeysInput"></a>

```csharp
public string[] SsoTagKeysInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.tagsInput"></a>

```csharp
public IResolvable|RedshiftRedshiftIdcApplicationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags">RedshiftRedshiftIdcApplicationTags</a>[]

---

##### `ApplicationType`<sup>Required</sup> <a name="ApplicationType" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.applicationType"></a>

```csharp
public string ApplicationType { get; }
```

- *Type:* string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; }
```

- *Type:* string

---

##### `IdcDisplayName`<sup>Required</sup> <a name="IdcDisplayName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcDisplayName"></a>

```csharp
public string IdcDisplayName { get; }
```

- *Type:* string

---

##### `IdcInstanceArn`<sup>Required</sup> <a name="IdcInstanceArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcInstanceArn"></a>

```csharp
public string IdcInstanceArn { get; }
```

- *Type:* string

---

##### `IdentityNamespace`<sup>Required</sup> <a name="IdentityNamespace" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.identityNamespace"></a>

```csharp
public string IdentityNamespace { get; }
```

- *Type:* string

---

##### `RedshiftIdcApplicationName`<sup>Required</sup> <a name="RedshiftIdcApplicationName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.redshiftIdcApplicationName"></a>

```csharp
public string RedshiftIdcApplicationName { get; }
```

- *Type:* string

---

##### `SsoTagKeys`<sup>Required</sup> <a name="SsoTagKeys" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.ssoTagKeys"></a>

```csharp
public string[] SsoTagKeys { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct <a name="RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct {
    string[] AuthorizedAudiencesList = null,
    string TrustedTokenIssuerArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct.property.authorizedAudiencesList">AuthorizedAudiencesList</a></code> | <code>string[]</code> | The list of audiences for the authorized token issuer. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct.property.trustedTokenIssuerArn">TrustedTokenIssuerArn</a></code> | <code>string</code> | The ARN for the authorized token issuer for integrating Amazon Redshift with IDC Identity Center. |

---

##### `AuthorizedAudiencesList`<sup>Optional</sup> <a name="AuthorizedAudiencesList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct.property.authorizedAudiencesList"></a>

```csharp
public string[] AuthorizedAudiencesList { get; set; }
```

- *Type:* string[]

The list of audiences for the authorized token issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#authorized_audiences_list RedshiftRedshiftIdcApplication#authorized_audiences_list}

---

##### `TrustedTokenIssuerArn`<sup>Optional</sup> <a name="TrustedTokenIssuerArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct.property.trustedTokenIssuerArn"></a>

```csharp
public string TrustedTokenIssuerArn { get; set; }
```

- *Type:* string

The ARN for the authorized token issuer for integrating Amazon Redshift with IDC Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#trusted_token_issuer_arn RedshiftRedshiftIdcApplication#trusted_token_issuer_arn}

---

### RedshiftRedshiftIdcApplicationConfig <a name="RedshiftRedshiftIdcApplicationConfig" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftRedshiftIdcApplicationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string IamRoleArn,
    string IdcDisplayName,
    string IdcInstanceArn,
    string RedshiftIdcApplicationName,
    string ApplicationType = null,
    IResolvable|RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct[] AuthorizedTokenIssuerList = null,
    string IdentityNamespace = null,
    IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrations[] ServiceIntegrations = null,
    string[] SsoTagKeys = null,
    IResolvable|RedshiftRedshiftIdcApplicationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | The IAM role ARN for the Amazon Redshift IAM Identity Center application instance. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.idcDisplayName">IdcDisplayName</a></code> | <code>string</code> | The display name for the Amazon Redshift IAM Identity Center application instance. It appears in the console. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.idcInstanceArn">IdcInstanceArn</a></code> | <code>string</code> | The Amazon resource name (ARN) of the IAM Identity Center instance where Amazon Redshift creates a new managed application. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.redshiftIdcApplicationName">RedshiftIdcApplicationName</a></code> | <code>string</code> | The name of the Redshift application in IAM Identity Center. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.applicationType">ApplicationType</a></code> | <code>string</code> | The type of application being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.authorizedTokenIssuerList">AuthorizedTokenIssuerList</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a>[]</code> | The token issuer list for the Amazon Redshift IAM Identity Center application instance. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.identityNamespace">IdentityNamespace</a></code> | <code>string</code> | The namespace for the Amazon Redshift IAM Identity Center application instance. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.serviceIntegrations">ServiceIntegrations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations">RedshiftRedshiftIdcApplicationServiceIntegrations</a>[]</code> | A collection of service integrations for the Redshift IAM Identity Center application. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.ssoTagKeys">SsoTagKeys</a></code> | <code>string[]</code> | A list of tag keys that Redshift Identity Center applications copy to IAM Identity Center. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags">RedshiftRedshiftIdcApplicationTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; set; }
```

- *Type:* string

The IAM role ARN for the Amazon Redshift IAM Identity Center application instance.

It has the required permissions to be assumed and invoke the IDC Identity Center API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#iam_role_arn RedshiftRedshiftIdcApplication#iam_role_arn}

---

##### `IdcDisplayName`<sup>Required</sup> <a name="IdcDisplayName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.idcDisplayName"></a>

```csharp
public string IdcDisplayName { get; set; }
```

- *Type:* string

The display name for the Amazon Redshift IAM Identity Center application instance. It appears in the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#idc_display_name RedshiftRedshiftIdcApplication#idc_display_name}

---

##### `IdcInstanceArn`<sup>Required</sup> <a name="IdcInstanceArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.idcInstanceArn"></a>

```csharp
public string IdcInstanceArn { get; set; }
```

- *Type:* string

The Amazon resource name (ARN) of the IAM Identity Center instance where Amazon Redshift creates a new managed application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#idc_instance_arn RedshiftRedshiftIdcApplication#idc_instance_arn}

---

##### `RedshiftIdcApplicationName`<sup>Required</sup> <a name="RedshiftIdcApplicationName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.redshiftIdcApplicationName"></a>

```csharp
public string RedshiftIdcApplicationName { get; set; }
```

- *Type:* string

The name of the Redshift application in IAM Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#redshift_idc_application_name RedshiftRedshiftIdcApplication#redshift_idc_application_name}

---

##### `ApplicationType`<sup>Optional</sup> <a name="ApplicationType" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.applicationType"></a>

```csharp
public string ApplicationType { get; set; }
```

- *Type:* string

The type of application being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#application_type RedshiftRedshiftIdcApplication#application_type}

---

##### `AuthorizedTokenIssuerList`<sup>Optional</sup> <a name="AuthorizedTokenIssuerList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.authorizedTokenIssuerList"></a>

```csharp
public IResolvable|RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct[] AuthorizedTokenIssuerList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a>[]

The token issuer list for the Amazon Redshift IAM Identity Center application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#authorized_token_issuer_list RedshiftRedshiftIdcApplication#authorized_token_issuer_list}

---

##### `IdentityNamespace`<sup>Optional</sup> <a name="IdentityNamespace" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.identityNamespace"></a>

```csharp
public string IdentityNamespace { get; set; }
```

- *Type:* string

The namespace for the Amazon Redshift IAM Identity Center application instance.

It determines which managed application verifies the connection token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#identity_namespace RedshiftRedshiftIdcApplication#identity_namespace}

---

##### `ServiceIntegrations`<sup>Optional</sup> <a name="ServiceIntegrations" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.serviceIntegrations"></a>

```csharp
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrations[] ServiceIntegrations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations">RedshiftRedshiftIdcApplicationServiceIntegrations</a>[]

A collection of service integrations for the Redshift IAM Identity Center application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#service_integrations RedshiftRedshiftIdcApplication#service_integrations}

---

##### `SsoTagKeys`<sup>Optional</sup> <a name="SsoTagKeys" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.ssoTagKeys"></a>

```csharp
public string[] SsoTagKeys { get; set; }
```

- *Type:* string[]

A list of tag keys that Redshift Identity Center applications copy to IAM Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#sso_tag_keys RedshiftRedshiftIdcApplication#sso_tag_keys}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.tags"></a>

```csharp
public IResolvable|RedshiftRedshiftIdcApplicationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags">RedshiftRedshiftIdcApplicationTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#tags RedshiftRedshiftIdcApplication#tags}

---

### RedshiftRedshiftIdcApplicationServiceIntegrations <a name="RedshiftRedshiftIdcApplicationServiceIntegrations" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftRedshiftIdcApplicationServiceIntegrations {
    IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation[] LakeFormation = null,
    IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift[] Redshift = null,
    IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants[] S3AccessGrants = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations.property.lakeFormation">LakeFormation</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a>[]</code> | A list of scopes set up for Lake Formation integration. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations.property.redshift">Redshift</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a>[]</code> | A list of scopes set up for Amazon Redshift integration. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations.property.s3AccessGrants">S3AccessGrants</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a>[]</code> | A list of scopes set up for S3 Access Grants integration. |

---

##### `LakeFormation`<sup>Optional</sup> <a name="LakeFormation" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations.property.lakeFormation"></a>

```csharp
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation[] LakeFormation { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a>[]

A list of scopes set up for Lake Formation integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#lake_formation RedshiftRedshiftIdcApplication#lake_formation}

---

##### `Redshift`<sup>Optional</sup> <a name="Redshift" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations.property.redshift"></a>

```csharp
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift[] Redshift { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a>[]

A list of scopes set up for Amazon Redshift integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#redshift RedshiftRedshiftIdcApplication#redshift}

---

##### `S3AccessGrants`<sup>Optional</sup> <a name="S3AccessGrants" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations.property.s3AccessGrants"></a>

```csharp
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants[] S3AccessGrants { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a>[]

A list of scopes set up for S3 Access Grants integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#s3_access_grants RedshiftRedshiftIdcApplication#s3_access_grants}

---

### RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation {
    RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery LakeFormationQuery = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation.property.lakeFormationQuery">LakeFormationQuery</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery</a></code> | The Lake Formation scope. |

---

##### `LakeFormationQuery`<sup>Optional</sup> <a name="LakeFormationQuery" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation.property.lakeFormationQuery"></a>

```csharp
public RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery LakeFormationQuery { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery</a>

The Lake Formation scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#lake_formation_query RedshiftRedshiftIdcApplication#lake_formation_query}

---

### RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery {
    string Authorization = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery.property.authorization">Authorization</a></code> | <code>string</code> | Determines whether the query scope is enabled or disabled. |

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Determines whether the query scope is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#authorization RedshiftRedshiftIdcApplication#authorization}

---

### RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift {
    RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect Connect = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift.property.connect">Connect</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect</a></code> | The Amazon Redshift connect integration scope. |

---

##### `Connect`<sup>Optional</sup> <a name="Connect" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift.property.connect"></a>

```csharp
public RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect Connect { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect</a>

The Amazon Redshift connect integration scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#connect RedshiftRedshiftIdcApplication#connect}

---

### RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect {
    string Authorization = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect.property.authorization">Authorization</a></code> | <code>string</code> | Determines whether the Amazon Redshift connect integration is enabled or disabled. |

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Determines whether the Amazon Redshift connect integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#authorization RedshiftRedshiftIdcApplication#authorization}

---

### RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants {
    RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess ReadWriteAccess = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants.property.readWriteAccess">ReadWriteAccess</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess</a></code> | The S3 Access Grants scope. |

---

##### `ReadWriteAccess`<sup>Optional</sup> <a name="ReadWriteAccess" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants.property.readWriteAccess"></a>

```csharp
public RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess ReadWriteAccess { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess</a>

The S3 Access Grants scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#read_write_access RedshiftRedshiftIdcApplication#read_write_access}

---

### RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess {
    string Authorization = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess.property.authorization">Authorization</a></code> | <code>string</code> | Determines whether the read/write scope is enabled or disabled. |

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Determines whether the read/write scope is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#authorization RedshiftRedshiftIdcApplication#authorization}

---

### RedshiftRedshiftIdcApplicationTags <a name="RedshiftRedshiftIdcApplicationTags" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftRedshiftIdcApplicationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#key RedshiftRedshiftIdcApplication#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#value RedshiftRedshiftIdcApplication#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList <a name="RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.get"></a>

```csharp
private RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.internalValue"></a>

```csharp
public IResolvable|RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a>[]

---


### RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference <a name="RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resetAuthorizedAudiencesList">ResetAuthorizedAudiencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resetTrustedTokenIssuerArn">ResetTrustedTokenIssuerArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizedAudiencesList` <a name="ResetAuthorizedAudiencesList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resetAuthorizedAudiencesList"></a>

```csharp
private void ResetAuthorizedAudiencesList()
```

##### `ResetTrustedTokenIssuerArn` <a name="ResetTrustedTokenIssuerArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resetTrustedTokenIssuerArn"></a>

```csharp
private void ResetTrustedTokenIssuerArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.authorizedAudiencesListInput">AuthorizedAudiencesListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.trustedTokenIssuerArnInput">TrustedTokenIssuerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.authorizedAudiencesList">AuthorizedAudiencesList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.trustedTokenIssuerArn">TrustedTokenIssuerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizedAudiencesListInput`<sup>Optional</sup> <a name="AuthorizedAudiencesListInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.authorizedAudiencesListInput"></a>

```csharp
public string[] AuthorizedAudiencesListInput { get; }
```

- *Type:* string[]

---

##### `TrustedTokenIssuerArnInput`<sup>Optional</sup> <a name="TrustedTokenIssuerArnInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.trustedTokenIssuerArnInput"></a>

```csharp
public string TrustedTokenIssuerArnInput { get; }
```

- *Type:* string

---

##### `AuthorizedAudiencesList`<sup>Required</sup> <a name="AuthorizedAudiencesList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.authorizedAudiencesList"></a>

```csharp
public string[] AuthorizedAudiencesList { get; }
```

- *Type:* string[]

---

##### `TrustedTokenIssuerArn`<sup>Required</sup> <a name="TrustedTokenIssuerArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.trustedTokenIssuerArn"></a>

```csharp
public string TrustedTokenIssuerArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a>

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.resetAuthorization">ResetAuthorization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorization` <a name="ResetAuthorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery</a>

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.get"></a>

```csharp
private RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.internalValue"></a>

```csharp
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a>[]

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.putLakeFormationQuery">PutLakeFormationQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.resetLakeFormationQuery">ResetLakeFormationQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLakeFormationQuery` <a name="PutLakeFormationQuery" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.putLakeFormationQuery"></a>

```csharp
private void PutLakeFormationQuery(RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.putLakeFormationQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery</a>

---

##### `ResetLakeFormationQuery` <a name="ResetLakeFormationQuery" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.resetLakeFormationQuery"></a>

```csharp
private void ResetLakeFormationQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.lakeFormationQuery">LakeFormationQuery</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.lakeFormationQueryInput">LakeFormationQueryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LakeFormationQuery`<sup>Required</sup> <a name="LakeFormationQuery" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.lakeFormationQuery"></a>

```csharp
public RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference LakeFormationQuery { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference</a>

---

##### `LakeFormationQueryInput`<sup>Optional</sup> <a name="LakeFormationQueryInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.lakeFormationQueryInput"></a>

```csharp
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery LakeFormationQueryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a>

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsList <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftRedshiftIdcApplicationServiceIntegrationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.get"></a>

```csharp
private RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations">RedshiftRedshiftIdcApplicationServiceIntegrations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.property.internalValue"></a>

```csharp
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations">RedshiftRedshiftIdcApplicationServiceIntegrations</a>[]

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putLakeFormation">PutLakeFormation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putRedshift">PutRedshift</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putS3AccessGrants">PutS3AccessGrants</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resetLakeFormation">ResetLakeFormation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resetRedshift">ResetRedshift</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resetS3AccessGrants">ResetS3AccessGrants</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLakeFormation` <a name="PutLakeFormation" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putLakeFormation"></a>

```csharp
private void PutLakeFormation(IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putLakeFormation.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a>[]

---

##### `PutRedshift` <a name="PutRedshift" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putRedshift"></a>

```csharp
private void PutRedshift(IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putRedshift.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a>[]

---

##### `PutS3AccessGrants` <a name="PutS3AccessGrants" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putS3AccessGrants"></a>

```csharp
private void PutS3AccessGrants(IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putS3AccessGrants.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a>[]

---

##### `ResetLakeFormation` <a name="ResetLakeFormation" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resetLakeFormation"></a>

```csharp
private void ResetLakeFormation()
```

##### `ResetRedshift` <a name="ResetRedshift" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resetRedshift"></a>

```csharp
private void ResetRedshift()
```

##### `ResetS3AccessGrants` <a name="ResetS3AccessGrants" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resetS3AccessGrants"></a>

```csharp
private void ResetS3AccessGrants()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.lakeFormation">LakeFormation</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.redshift">Redshift</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.s3AccessGrants">S3AccessGrants</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.lakeFormationInput">LakeFormationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.redshiftInput">RedshiftInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.s3AccessGrantsInput">S3AccessGrantsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations">RedshiftRedshiftIdcApplicationServiceIntegrations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LakeFormation`<sup>Required</sup> <a name="LakeFormation" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.lakeFormation"></a>

```csharp
public RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList LakeFormation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList</a>

---

##### `Redshift`<sup>Required</sup> <a name="Redshift" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.redshift"></a>

```csharp
public RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList Redshift { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList</a>

---

##### `S3AccessGrants`<sup>Required</sup> <a name="S3AccessGrants" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.s3AccessGrants"></a>

```csharp
public RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList S3AccessGrants { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList</a>

---

##### `LakeFormationInput`<sup>Optional</sup> <a name="LakeFormationInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.lakeFormationInput"></a>

```csharp
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation[] LakeFormationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a>[]

---

##### `RedshiftInput`<sup>Optional</sup> <a name="RedshiftInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.redshiftInput"></a>

```csharp
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift[] RedshiftInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a>[]

---

##### `S3AccessGrantsInput`<sup>Optional</sup> <a name="S3AccessGrantsInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.s3AccessGrantsInput"></a>

```csharp
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants[] S3AccessGrantsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations">RedshiftRedshiftIdcApplicationServiceIntegrations</a>

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.resetAuthorization">ResetAuthorization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorization` <a name="ResetAuthorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect</a>

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.get"></a>

```csharp
private RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.internalValue"></a>

```csharp
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a>[]

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.putConnect">PutConnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.resetConnect">ResetConnect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConnect` <a name="PutConnect" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.putConnect"></a>

```csharp
private void PutConnect(RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.putConnect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect</a>

---

##### `ResetConnect` <a name="ResetConnect" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.resetConnect"></a>

```csharp
private void ResetConnect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.connect">Connect</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.connectInput">ConnectInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Connect`<sup>Required</sup> <a name="Connect" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.connect"></a>

```csharp
public RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference Connect { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference</a>

---

##### `ConnectInput`<sup>Optional</sup> <a name="ConnectInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.connectInput"></a>

```csharp
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect ConnectInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a>

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.get"></a>

```csharp
private RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.internalValue"></a>

```csharp
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a>[]

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.putReadWriteAccess">PutReadWriteAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.resetReadWriteAccess">ResetReadWriteAccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReadWriteAccess` <a name="PutReadWriteAccess" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.putReadWriteAccess"></a>

```csharp
private void PutReadWriteAccess(RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.putReadWriteAccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess</a>

---

##### `ResetReadWriteAccess` <a name="ResetReadWriteAccess" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.resetReadWriteAccess"></a>

```csharp
private void ResetReadWriteAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.readWriteAccess">ReadWriteAccess</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.readWriteAccessInput">ReadWriteAccessInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadWriteAccess`<sup>Required</sup> <a name="ReadWriteAccess" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.readWriteAccess"></a>

```csharp
public RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference ReadWriteAccess { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference</a>

---

##### `ReadWriteAccessInput`<sup>Optional</sup> <a name="ReadWriteAccessInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.readWriteAccessInput"></a>

```csharp
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess ReadWriteAccessInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a>

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.resetAuthorization">ResetAuthorization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorization` <a name="ResetAuthorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess</a>

---


### RedshiftRedshiftIdcApplicationTagsList <a name="RedshiftRedshiftIdcApplicationTagsList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftRedshiftIdcApplicationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.get"></a>

```csharp
private RedshiftRedshiftIdcApplicationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags">RedshiftRedshiftIdcApplicationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.property.internalValue"></a>

```csharp
public IResolvable|RedshiftRedshiftIdcApplicationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags">RedshiftRedshiftIdcApplicationTags</a>[]

---


### RedshiftRedshiftIdcApplicationTagsOutputReference <a name="RedshiftRedshiftIdcApplicationTagsOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftRedshiftIdcApplicationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags">RedshiftRedshiftIdcApplicationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RedshiftRedshiftIdcApplicationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags">RedshiftRedshiftIdcApplicationTags</a>

---



