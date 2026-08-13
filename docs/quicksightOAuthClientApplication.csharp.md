# `quicksightOAuthClientApplication` Submodule <a name="`quicksightOAuthClientApplication` Submodule" id="@cdktn/provider-awscc.quicksightOAuthClientApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightOAuthClientApplication <a name="QuicksightOAuthClientApplication" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_o_auth_client_application awscc_quicksight_o_auth_client_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightOAuthClientApplication(Construct Scope, string Id, QuicksightOAuthClientApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig">QuicksightOAuthClientApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig">QuicksightOAuthClientApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.putIdentityProviderVpcConnectionProperties">PutIdentityProviderVpcConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetDataSourceType">ResetDataSourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetIdentityProviderVpcConnectionProperties">ResetIdentityProviderVpcConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetOAuthAuthorizationEndpointUrl">ResetOAuthAuthorizationEndpointUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetOAuthScopes">ResetOAuthScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentityProviderVpcConnectionProperties` <a name="PutIdentityProviderVpcConnectionProperties" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.putIdentityProviderVpcConnectionProperties"></a>

```csharp
private void PutIdentityProviderVpcConnectionProperties(QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.putIdentityProviderVpcConnectionProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.putTags"></a>

```csharp
private void PutTags(IResolvable|QuicksightOAuthClientApplicationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags">QuicksightOAuthClientApplicationTags</a>[]

---

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetDataSourceType` <a name="ResetDataSourceType" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetDataSourceType"></a>

```csharp
private void ResetDataSourceType()
```

##### `ResetIdentityProviderVpcConnectionProperties` <a name="ResetIdentityProviderVpcConnectionProperties" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetIdentityProviderVpcConnectionProperties"></a>

```csharp
private void ResetIdentityProviderVpcConnectionProperties()
```

##### `ResetOAuthAuthorizationEndpointUrl` <a name="ResetOAuthAuthorizationEndpointUrl" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetOAuthAuthorizationEndpointUrl"></a>

```csharp
private void ResetOAuthAuthorizationEndpointUrl()
```

##### `ResetOAuthScopes` <a name="ResetOAuthScopes" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetOAuthScopes"></a>

```csharp
private void ResetOAuthScopes()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightOAuthClientApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightOAuthClientApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightOAuthClientApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightOAuthClientApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightOAuthClientApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a QuicksightOAuthClientApplication resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuicksightOAuthClientApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuicksightOAuthClientApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_o_auth_client_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightOAuthClientApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.identityProviderVpcConnectionProperties">IdentityProviderVpcConnectionProperties</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList">QuicksightOAuthClientApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.dataSourceTypeInput">DataSourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.identityProviderVpcConnectionPropertiesInput">IdentityProviderVpcConnectionPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthAuthorizationEndpointUrlInput">OAuthAuthorizationEndpointUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientApplicationIdInput">OAuthClientApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientAuthenticationTypeInput">OAuthClientAuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthScopesInput">OAuthScopesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthTokenEndpointUrlInput">OAuthTokenEndpointUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags">QuicksightOAuthClientApplicationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.dataSourceType">DataSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthAuthorizationEndpointUrl">OAuthAuthorizationEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientApplicationId">OAuthClientApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientAuthenticationType">OAuthClientAuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthScopes">OAuthScopes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthTokenEndpointUrl">OAuthTokenEndpointUrl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityProviderVpcConnectionProperties`<sup>Required</sup> <a name="IdentityProviderVpcConnectionProperties" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.identityProviderVpcConnectionProperties"></a>

```csharp
public QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference IdentityProviderVpcConnectionProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference</a>

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.tags"></a>

```csharp
public QuicksightOAuthClientApplicationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList">QuicksightOAuthClientApplicationTagsList</a>

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `DataSourceTypeInput`<sup>Optional</sup> <a name="DataSourceTypeInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.dataSourceTypeInput"></a>

```csharp
public string DataSourceTypeInput { get; }
```

- *Type:* string

---

##### `IdentityProviderVpcConnectionPropertiesInput`<sup>Optional</sup> <a name="IdentityProviderVpcConnectionPropertiesInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.identityProviderVpcConnectionPropertiesInput"></a>

```csharp
public IResolvable|QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties IdentityProviderVpcConnectionPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OAuthAuthorizationEndpointUrlInput`<sup>Optional</sup> <a name="OAuthAuthorizationEndpointUrlInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthAuthorizationEndpointUrlInput"></a>

```csharp
public string OAuthAuthorizationEndpointUrlInput { get; }
```

- *Type:* string

---

##### `OAuthClientApplicationIdInput`<sup>Optional</sup> <a name="OAuthClientApplicationIdInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientApplicationIdInput"></a>

```csharp
public string OAuthClientApplicationIdInput { get; }
```

- *Type:* string

---

##### `OAuthClientAuthenticationTypeInput`<sup>Optional</sup> <a name="OAuthClientAuthenticationTypeInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientAuthenticationTypeInput"></a>

```csharp
public string OAuthClientAuthenticationTypeInput { get; }
```

- *Type:* string

---

##### `OAuthScopesInput`<sup>Optional</sup> <a name="OAuthScopesInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthScopesInput"></a>

```csharp
public string OAuthScopesInput { get; }
```

- *Type:* string

---

##### `OAuthTokenEndpointUrlInput`<sup>Optional</sup> <a name="OAuthTokenEndpointUrlInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthTokenEndpointUrlInput"></a>

```csharp
public string OAuthTokenEndpointUrlInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.tagsInput"></a>

```csharp
public IResolvable|QuicksightOAuthClientApplicationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags">QuicksightOAuthClientApplicationTags</a>[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `DataSourceType`<sup>Required</sup> <a name="DataSourceType" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.dataSourceType"></a>

```csharp
public string DataSourceType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OAuthAuthorizationEndpointUrl`<sup>Required</sup> <a name="OAuthAuthorizationEndpointUrl" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthAuthorizationEndpointUrl"></a>

```csharp
public string OAuthAuthorizationEndpointUrl { get; }
```

- *Type:* string

---

##### `OAuthClientApplicationId`<sup>Required</sup> <a name="OAuthClientApplicationId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientApplicationId"></a>

```csharp
public string OAuthClientApplicationId { get; }
```

- *Type:* string

---

##### `OAuthClientAuthenticationType`<sup>Required</sup> <a name="OAuthClientAuthenticationType" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientAuthenticationType"></a>

```csharp
public string OAuthClientAuthenticationType { get; }
```

- *Type:* string

---

##### `OAuthScopes`<sup>Required</sup> <a name="OAuthScopes" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthScopes"></a>

```csharp
public string OAuthScopes { get; }
```

- *Type:* string

---

##### `OAuthTokenEndpointUrl`<sup>Required</sup> <a name="OAuthTokenEndpointUrl" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthTokenEndpointUrl"></a>

```csharp
public string OAuthTokenEndpointUrl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightOAuthClientApplicationConfig <a name="QuicksightOAuthClientApplicationConfig" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightOAuthClientApplicationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string OAuthClientApplicationId,
    string OAuthClientAuthenticationType,
    string OAuthTokenEndpointUrl,
    string ClientId = null,
    string ClientSecret = null,
    string DataSourceType = null,
    QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties IdentityProviderVpcConnectionProperties = null,
    string OAuthAuthorizationEndpointUrl = null,
    string OAuthScopes = null,
    IResolvable|QuicksightOAuthClientApplicationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_o_auth_client_application#name QuicksightOAuthClientApplication#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthClientApplicationId">OAuthClientApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_o_auth_client_application#o_auth_client_application_id QuicksightOAuthClientApplication#o_auth_client_application_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthClientAuthenticationType">OAuthClientAuthenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_o_auth_client_application#o_auth_client_authentication_type QuicksightOAuthClientApplication#o_auth_client_authentication_type}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthTokenEndpointUrl">OAuthTokenEndpointUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_o_auth_client_application#o_auth_token_endpoint_url QuicksightOAuthClientApplication#o_auth_token_endpoint_url}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_o_auth_client_application#client_id QuicksightOAuthClientApplication#client_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_o_auth_client_application#client_secret QuicksightOAuthClientApplication#client_secret}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.dataSourceType">DataSourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_o_auth_client_application#data_source_type QuicksightOAuthClientApplication#data_source_type}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.identityProviderVpcConnectionProperties">IdentityProviderVpcConnectionProperties</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_o_auth_client_application#identity_provider_vpc_connection_properties QuicksightOAuthClientApplication#identity_provider_vpc_connection_properties}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthAuthorizationEndpointUrl">OAuthAuthorizationEndpointUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_o_auth_client_application#o_auth_authorization_endpoint_url QuicksightOAuthClientApplication#o_auth_authorization_endpoint_url}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthScopes">OAuthScopes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_o_auth_client_application#o_auth_scopes QuicksightOAuthClientApplication#o_auth_scopes}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags">QuicksightOAuthClientApplicationTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_o_auth_client_application#tags QuicksightOAuthClientApplication#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_o_auth_client_application#name QuicksightOAuthClientApplication#name}.

---

##### `OAuthClientApplicationId`<sup>Required</sup> <a name="OAuthClientApplicationId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthClientApplicationId"></a>

```csharp
public string OAuthClientApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_o_auth_client_application#o_auth_client_application_id QuicksightOAuthClientApplication#o_auth_client_application_id}.

---

##### `OAuthClientAuthenticationType`<sup>Required</sup> <a name="OAuthClientAuthenticationType" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthClientAuthenticationType"></a>

```csharp
public string OAuthClientAuthenticationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_o_auth_client_application#o_auth_client_authentication_type QuicksightOAuthClientApplication#o_auth_client_authentication_type}.

---

##### `OAuthTokenEndpointUrl`<sup>Required</sup> <a name="OAuthTokenEndpointUrl" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthTokenEndpointUrl"></a>

```csharp
public string OAuthTokenEndpointUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_o_auth_client_application#o_auth_token_endpoint_url QuicksightOAuthClientApplication#o_auth_token_endpoint_url}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_o_auth_client_application#client_id QuicksightOAuthClientApplication#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_o_auth_client_application#client_secret QuicksightOAuthClientApplication#client_secret}.

---

##### `DataSourceType`<sup>Optional</sup> <a name="DataSourceType" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.dataSourceType"></a>

```csharp
public string DataSourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_o_auth_client_application#data_source_type QuicksightOAuthClientApplication#data_source_type}.

---

##### `IdentityProviderVpcConnectionProperties`<sup>Optional</sup> <a name="IdentityProviderVpcConnectionProperties" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.identityProviderVpcConnectionProperties"></a>

```csharp
public QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties IdentityProviderVpcConnectionProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_o_auth_client_application#identity_provider_vpc_connection_properties QuicksightOAuthClientApplication#identity_provider_vpc_connection_properties}.

---

##### `OAuthAuthorizationEndpointUrl`<sup>Optional</sup> <a name="OAuthAuthorizationEndpointUrl" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthAuthorizationEndpointUrl"></a>

```csharp
public string OAuthAuthorizationEndpointUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_o_auth_client_application#o_auth_authorization_endpoint_url QuicksightOAuthClientApplication#o_auth_authorization_endpoint_url}.

---

##### `OAuthScopes`<sup>Optional</sup> <a name="OAuthScopes" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthScopes"></a>

```csharp
public string OAuthScopes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_o_auth_client_application#o_auth_scopes QuicksightOAuthClientApplication#o_auth_scopes}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.tags"></a>

```csharp
public IResolvable|QuicksightOAuthClientApplicationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags">QuicksightOAuthClientApplicationTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_o_auth_client_application#tags QuicksightOAuthClientApplication#tags}.

---

### QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties <a name="QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties {
    string VpcConnectionArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties.property.vpcConnectionArn">VpcConnectionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_o_auth_client_application#vpc_connection_arn QuicksightOAuthClientApplication#vpc_connection_arn}. |

---

##### `VpcConnectionArn`<sup>Optional</sup> <a name="VpcConnectionArn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties.property.vpcConnectionArn"></a>

```csharp
public string VpcConnectionArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_o_auth_client_application#vpc_connection_arn QuicksightOAuthClientApplication#vpc_connection_arn}.

---

### QuicksightOAuthClientApplicationTags <a name="QuicksightOAuthClientApplicationTags" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightOAuthClientApplicationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_o_auth_client_application#key QuicksightOAuthClientApplication#key}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_o_auth_client_application#value QuicksightOAuthClientApplication#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_o_auth_client_application#key QuicksightOAuthClientApplication#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_o_auth_client_application#value QuicksightOAuthClientApplication#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference <a name="QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.resetVpcConnectionArn">ResetVpcConnectionArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVpcConnectionArn` <a name="ResetVpcConnectionArn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.resetVpcConnectionArn"></a>

```csharp
private void ResetVpcConnectionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.vpcConnectionArnInput">VpcConnectionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.vpcConnectionArn">VpcConnectionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VpcConnectionArnInput`<sup>Optional</sup> <a name="VpcConnectionArnInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.vpcConnectionArnInput"></a>

```csharp
public string VpcConnectionArnInput { get; }
```

- *Type:* string

---

##### `VpcConnectionArn`<sup>Required</sup> <a name="VpcConnectionArn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.vpcConnectionArn"></a>

```csharp
public string VpcConnectionArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties</a>

---


### QuicksightOAuthClientApplicationTagsList <a name="QuicksightOAuthClientApplicationTagsList" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightOAuthClientApplicationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.get"></a>

```csharp
private QuicksightOAuthClientApplicationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags">QuicksightOAuthClientApplicationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.property.internalValue"></a>

```csharp
public IResolvable|QuicksightOAuthClientApplicationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags">QuicksightOAuthClientApplicationTags</a>[]

---


### QuicksightOAuthClientApplicationTagsOutputReference <a name="QuicksightOAuthClientApplicationTagsOutputReference" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightOAuthClientApplicationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags">QuicksightOAuthClientApplicationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightOAuthClientApplicationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags">QuicksightOAuthClientApplicationTags</a>

---



