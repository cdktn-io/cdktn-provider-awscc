# `bedrockagentcorePaymentCredentialProvider` Submodule <a name="`bedrockagentcorePaymentCredentialProvider` Submodule" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcorePaymentCredentialProvider <a name="BedrockagentcorePaymentCredentialProvider" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider awscc_bedrockagentcore_payment_credential_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProvider(Construct Scope, string Id, BedrockagentcorePaymentCredentialProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig">BedrockagentcorePaymentCredentialProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig">BedrockagentcorePaymentCredentialProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.putProviderConfigurationInput">PutProviderConfigurationInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.resetProviderConfigurationInput">ResetProviderConfigurationInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfigurationInput` <a name="PutProviderConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.putProviderConfigurationInput"></a>

```csharp
private void PutProviderConfigurationInput(BedrockagentcorePaymentCredentialProviderProviderConfigurationInput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.putProviderConfigurationInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput">BedrockagentcorePaymentCredentialProviderProviderConfigurationInput</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.putTags"></a>

```csharp
private void PutTags(IResolvable|BedrockagentcorePaymentCredentialProviderTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags">BedrockagentcorePaymentCredentialProviderTags</a>[]

---

##### `ResetProviderConfigurationInput` <a name="ResetProviderConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.resetProviderConfigurationInput"></a>

```csharp
private void ResetProviderConfigurationInput()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcorePaymentCredentialProvider resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcorePaymentCredentialProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcorePaymentCredentialProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcorePaymentCredentialProvider.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcorePaymentCredentialProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BedrockagentcorePaymentCredentialProvider resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcorePaymentCredentialProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcorePaymentCredentialProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcorePaymentCredentialProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.credentialProviderArn">CredentialProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.providerConfigurationInput">ProviderConfigurationInput</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.providerConfigurationOutput">ProviderConfigurationOutput</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList">BedrockagentcorePaymentCredentialProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.credentialProviderVendorInput">CredentialProviderVendorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.providerConfigurationInputInput">ProviderConfigurationInputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput">BedrockagentcorePaymentCredentialProviderProviderConfigurationInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags">BedrockagentcorePaymentCredentialProviderTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.credentialProviderVendor">CredentialProviderVendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `CredentialProviderArn`<sup>Required</sup> <a name="CredentialProviderArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.credentialProviderArn"></a>

```csharp
public string CredentialProviderArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; }
```

- *Type:* string

---

##### `ProviderConfigurationInput`<sup>Required</sup> <a name="ProviderConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.providerConfigurationInput"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference ProviderConfigurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference</a>

---

##### `ProviderConfigurationOutput`<sup>Required</sup> <a name="ProviderConfigurationOutput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.providerConfigurationOutput"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference ProviderConfigurationOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.tags"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList">BedrockagentcorePaymentCredentialProviderTagsList</a>

---

##### `CredentialProviderVendorInput`<sup>Optional</sup> <a name="CredentialProviderVendorInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.credentialProviderVendorInput"></a>

```csharp
public string CredentialProviderVendorInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigurationInputInput`<sup>Optional</sup> <a name="ProviderConfigurationInputInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.providerConfigurationInputInput"></a>

```csharp
public IResolvable|BedrockagentcorePaymentCredentialProviderProviderConfigurationInput ProviderConfigurationInputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput">BedrockagentcorePaymentCredentialProviderProviderConfigurationInput</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.tagsInput"></a>

```csharp
public IResolvable|BedrockagentcorePaymentCredentialProviderTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags">BedrockagentcorePaymentCredentialProviderTags</a>[]

---

##### `CredentialProviderVendor`<sup>Required</sup> <a name="CredentialProviderVendor" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.credentialProviderVendor"></a>

```csharp
public string CredentialProviderVendor { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcorePaymentCredentialProviderConfig <a name="BedrockagentcorePaymentCredentialProviderConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CredentialProviderVendor,
    string Name,
    BedrockagentcorePaymentCredentialProviderProviderConfigurationInput ProviderConfigurationInput = null,
    IResolvable|BedrockagentcorePaymentCredentialProviderTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.credentialProviderVendor">CredentialProviderVendor</a></code> | <code>string</code> | Supported vendor types for payment providers. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.name">Name</a></code> | <code>string</code> | Unique name for the payment credential provider. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.providerConfigurationInput">ProviderConfigurationInput</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput">BedrockagentcorePaymentCredentialProviderProviderConfigurationInput</a></code> | Provider configuration input containing secrets for creation/update. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags">BedrockagentcorePaymentCredentialProviderTags</a>[]</code> | Tags for the payment credential provider. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CredentialProviderVendor`<sup>Required</sup> <a name="CredentialProviderVendor" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.credentialProviderVendor"></a>

```csharp
public string CredentialProviderVendor { get; set; }
```

- *Type:* string

Supported vendor types for payment providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#credential_provider_vendor BedrockagentcorePaymentCredentialProvider#credential_provider_vendor}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Unique name for the payment credential provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#name BedrockagentcorePaymentCredentialProvider#name}

---

##### `ProviderConfigurationInput`<sup>Optional</sup> <a name="ProviderConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.providerConfigurationInput"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationInput ProviderConfigurationInput { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput">BedrockagentcorePaymentCredentialProviderProviderConfigurationInput</a>

Provider configuration input containing secrets for creation/update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#provider_configuration_input BedrockagentcorePaymentCredentialProvider#provider_configuration_input}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.tags"></a>

```csharp
public IResolvable|BedrockagentcorePaymentCredentialProviderTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags">BedrockagentcorePaymentCredentialProviderTags</a>[]

Tags for the payment credential provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#tags BedrockagentcorePaymentCredentialProvider#tags}

---

### BedrockagentcorePaymentCredentialProviderProviderConfigurationInput <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationInput {
    BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration AmazonPayConfiguration = null,
    BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration CoinbaseCdpConfiguration = null,
    BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration PayPalConfiguration = null,
    BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration StripeConfiguration = null,
    BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration StripePrivyConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput.property.amazonPayConfiguration">AmazonPayConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration</a></code> | Amazon Pay configuration with merchant identifiers and a delegated authorization token. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput.property.coinbaseCdpConfiguration">CoinbaseCdpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration</a></code> | Coinbase CDP configuration with API credentials. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput.property.payPalConfiguration">PayPalConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration</a></code> | PayPal configuration with REST app credentials. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput.property.stripeConfiguration">StripeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration</a></code> | Stripe configuration with a restricted key, supplied inline (MANAGED) or as a Secrets Manager reference (EXTERNAL). |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput.property.stripePrivyConfiguration">StripePrivyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration</a></code> | Stripe Privy configuration with credentials. |

---

##### `AmazonPayConfiguration`<sup>Optional</sup> <a name="AmazonPayConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput.property.amazonPayConfiguration"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration AmazonPayConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration</a>

Amazon Pay configuration with merchant identifiers and a delegated authorization token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#amazon_pay_configuration BedrockagentcorePaymentCredentialProvider#amazon_pay_configuration}

---

##### `CoinbaseCdpConfiguration`<sup>Optional</sup> <a name="CoinbaseCdpConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput.property.coinbaseCdpConfiguration"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration CoinbaseCdpConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration</a>

Coinbase CDP configuration with API credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#coinbase_cdp_configuration BedrockagentcorePaymentCredentialProvider#coinbase_cdp_configuration}

---

##### `PayPalConfiguration`<sup>Optional</sup> <a name="PayPalConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput.property.payPalConfiguration"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration PayPalConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration</a>

PayPal configuration with REST app credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#pay_pal_configuration BedrockagentcorePaymentCredentialProvider#pay_pal_configuration}

---

##### `StripeConfiguration`<sup>Optional</sup> <a name="StripeConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput.property.stripeConfiguration"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration StripeConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration</a>

Stripe configuration with a restricted key, supplied inline (MANAGED) or as a Secrets Manager reference (EXTERNAL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#stripe_configuration BedrockagentcorePaymentCredentialProvider#stripe_configuration}

---

##### `StripePrivyConfiguration`<sup>Optional</sup> <a name="StripePrivyConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput.property.stripePrivyConfiguration"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration StripePrivyConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration</a>

Stripe Privy configuration with credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#stripe_privy_configuration BedrockagentcorePaymentCredentialProvider#stripe_privy_configuration}

---

### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration {
    string AmazonPayRegion = null,
    string AuthorizationToken = null,
    BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfig AuthorizationTokenConfig = null,
    string AuthorizationTokenSource = null,
    string Environment = null,
    string MerchantId = null,
    string StoreId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration.property.amazonPayRegion">AmazonPayRegion</a></code> | <code>string</code> | The Amazon Pay region the merchant's authorization token belongs to. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration.property.authorizationToken">AuthorizationToken</a></code> | <code>string</code> | The delegated authorization token, supplied inline. Mutually exclusive with AuthorizationTokenConfig. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration.property.authorizationTokenConfig">AuthorizationTokenConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfig</a></code> | A reference to a customer-provided secret stored in AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration.property.authorizationTokenSource">AuthorizationTokenSource</a></code> | <code>string</code> | The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration.property.environment">Environment</a></code> | <code>string</code> | The Amazon Pay API environment. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration.property.merchantId">MerchantId</a></code> | <code>string</code> | The Amazon Pay merchant (seller) ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration.property.storeId">StoreId</a></code> | <code>string</code> | The Amazon Pay store (client) ID. |

---

##### `AmazonPayRegion`<sup>Optional</sup> <a name="AmazonPayRegion" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration.property.amazonPayRegion"></a>

```csharp
public string AmazonPayRegion { get; set; }
```

- *Type:* string

The Amazon Pay region the merchant's authorization token belongs to.

AgentCore uses it to pick the Amazon Pay API host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#amazon_pay_region BedrockagentcorePaymentCredentialProvider#amazon_pay_region}

---

##### `AuthorizationToken`<sup>Optional</sup> <a name="AuthorizationToken" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration.property.authorizationToken"></a>

```csharp
public string AuthorizationToken { get; set; }
```

- *Type:* string

The delegated authorization token, supplied inline. Mutually exclusive with AuthorizationTokenConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#authorization_token BedrockagentcorePaymentCredentialProvider#authorization_token}

---

##### `AuthorizationTokenConfig`<sup>Optional</sup> <a name="AuthorizationTokenConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration.property.authorizationTokenConfig"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfig AuthorizationTokenConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfig</a>

A reference to a customer-provided secret stored in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#authorization_token_config BedrockagentcorePaymentCredentialProvider#authorization_token_config}

---

##### `AuthorizationTokenSource`<sup>Optional</sup> <a name="AuthorizationTokenSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration.property.authorizationTokenSource"></a>

```csharp
public string AuthorizationTokenSource { get; set; }
```

- *Type:* string

The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#authorization_token_source BedrockagentcorePaymentCredentialProvider#authorization_token_source}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

The Amazon Pay API environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#environment BedrockagentcorePaymentCredentialProvider#environment}

---

##### `MerchantId`<sup>Optional</sup> <a name="MerchantId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration.property.merchantId"></a>

```csharp
public string MerchantId { get; set; }
```

- *Type:* string

The Amazon Pay merchant (seller) ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#merchant_id BedrockagentcorePaymentCredentialProvider#merchant_id}

---

##### `StoreId`<sup>Optional</sup> <a name="StoreId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration.property.storeId"></a>

```csharp
public string StoreId { get; set; }
```

- *Type:* string

The Amazon Pay store (client) ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#store_id BedrockagentcorePaymentCredentialProvider#store_id}

---

### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfig <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfig {
    string JsonKey = null,
    string SecretId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfig.property.jsonKey">JsonKey</a></code> | <code>string</code> | The JSON key within the secret that contains the credential value. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfig.property.secretId">SecretId</a></code> | <code>string</code> | The ID or ARN of the secret in AWS Secrets Manager. |

---

##### `JsonKey`<sup>Optional</sup> <a name="JsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfig.property.jsonKey"></a>

```csharp
public string JsonKey { get; set; }
```

- *Type:* string

The JSON key within the secret that contains the credential value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#json_key BedrockagentcorePaymentCredentialProvider#json_key}

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfig.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

The ID or ARN of the secret in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#secret_id BedrockagentcorePaymentCredentialProvider#secret_id}

---

### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration {
    string ApiKeyId = null,
    string ApiKeySecret = null,
    BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig ApiKeySecretConfig = null,
    string ApiKeySecretSource = null,
    string WalletSecret = null,
    BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig WalletSecretConfig = null,
    string WalletSecretSource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.apiKeyId">ApiKeyId</a></code> | <code>string</code> | The Coinbase CDP API key ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.apiKeySecret">ApiKeySecret</a></code> | <code>string</code> | The Coinbase CDP API key secret. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.apiKeySecretConfig">ApiKeySecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig</a></code> | A reference to a customer-provided secret stored in AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.apiKeySecretSource">ApiKeySecretSource</a></code> | <code>string</code> | The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.walletSecret">WalletSecret</a></code> | <code>string</code> | The Coinbase CDP wallet secret. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.walletSecretConfig">WalletSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig</a></code> | A reference to a customer-provided secret stored in AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.walletSecretSource">WalletSecretSource</a></code> | <code>string</code> | The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets. |

---

##### `ApiKeyId`<sup>Optional</sup> <a name="ApiKeyId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.apiKeyId"></a>

```csharp
public string ApiKeyId { get; set; }
```

- *Type:* string

The Coinbase CDP API key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#api_key_id BedrockagentcorePaymentCredentialProvider#api_key_id}

---

##### `ApiKeySecret`<sup>Optional</sup> <a name="ApiKeySecret" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.apiKeySecret"></a>

```csharp
public string ApiKeySecret { get; set; }
```

- *Type:* string

The Coinbase CDP API key secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#api_key_secret BedrockagentcorePaymentCredentialProvider#api_key_secret}

---

##### `ApiKeySecretConfig`<sup>Optional</sup> <a name="ApiKeySecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.apiKeySecretConfig"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig ApiKeySecretConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig</a>

A reference to a customer-provided secret stored in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#api_key_secret_config BedrockagentcorePaymentCredentialProvider#api_key_secret_config}

---

##### `ApiKeySecretSource`<sup>Optional</sup> <a name="ApiKeySecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.apiKeySecretSource"></a>

```csharp
public string ApiKeySecretSource { get; set; }
```

- *Type:* string

The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#api_key_secret_source BedrockagentcorePaymentCredentialProvider#api_key_secret_source}

---

##### `WalletSecret`<sup>Optional</sup> <a name="WalletSecret" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.walletSecret"></a>

```csharp
public string WalletSecret { get; set; }
```

- *Type:* string

The Coinbase CDP wallet secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#wallet_secret BedrockagentcorePaymentCredentialProvider#wallet_secret}

---

##### `WalletSecretConfig`<sup>Optional</sup> <a name="WalletSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.walletSecretConfig"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig WalletSecretConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig</a>

A reference to a customer-provided secret stored in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#wallet_secret_config BedrockagentcorePaymentCredentialProvider#wallet_secret_config}

---

##### `WalletSecretSource`<sup>Optional</sup> <a name="WalletSecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.walletSecretSource"></a>

```csharp
public string WalletSecretSource { get; set; }
```

- *Type:* string

The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#wallet_secret_source BedrockagentcorePaymentCredentialProvider#wallet_secret_source}

---

### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig {
    string JsonKey = null,
    string SecretId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig.property.jsonKey">JsonKey</a></code> | <code>string</code> | The JSON key within the secret that contains the credential value. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig.property.secretId">SecretId</a></code> | <code>string</code> | The ID or ARN of the secret in AWS Secrets Manager. |

---

##### `JsonKey`<sup>Optional</sup> <a name="JsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig.property.jsonKey"></a>

```csharp
public string JsonKey { get; set; }
```

- *Type:* string

The JSON key within the secret that contains the credential value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#json_key BedrockagentcorePaymentCredentialProvider#json_key}

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

The ID or ARN of the secret in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#secret_id BedrockagentcorePaymentCredentialProvider#secret_id}

---

### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig {
    string JsonKey = null,
    string SecretId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig.property.jsonKey">JsonKey</a></code> | <code>string</code> | The JSON key within the secret that contains the credential value. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig.property.secretId">SecretId</a></code> | <code>string</code> | The ID or ARN of the secret in AWS Secrets Manager. |

---

##### `JsonKey`<sup>Optional</sup> <a name="JsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig.property.jsonKey"></a>

```csharp
public string JsonKey { get; set; }
```

- *Type:* string

The JSON key within the secret that contains the credential value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#json_key BedrockagentcorePaymentCredentialProvider#json_key}

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

The ID or ARN of the secret in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#secret_id BedrockagentcorePaymentCredentialProvider#secret_id}

---

### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration {
    string ClientId = null,
    string ClientSecret = null,
    BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfig ClientSecretConfig = null,
    string ClientSecretSource = null,
    string Environment = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration.property.clientId">ClientId</a></code> | <code>string</code> | The PayPal REST app client ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration.property.clientSecret">ClientSecret</a></code> | <code>string</code> | The PayPal REST app client secret, supplied inline. Mutually exclusive with ClientSecretConfig. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration.property.clientSecretConfig">ClientSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfig</a></code> | A reference to a customer-provided secret stored in AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration.property.clientSecretSource">ClientSecretSource</a></code> | <code>string</code> | The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration.property.environment">Environment</a></code> | <code>string</code> | The PayPal API environment. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The PayPal REST app client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#client_id BedrockagentcorePaymentCredentialProvider#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

The PayPal REST app client secret, supplied inline. Mutually exclusive with ClientSecretConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#client_secret BedrockagentcorePaymentCredentialProvider#client_secret}

---

##### `ClientSecretConfig`<sup>Optional</sup> <a name="ClientSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration.property.clientSecretConfig"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfig ClientSecretConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfig</a>

A reference to a customer-provided secret stored in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#client_secret_config BedrockagentcorePaymentCredentialProvider#client_secret_config}

---

##### `ClientSecretSource`<sup>Optional</sup> <a name="ClientSecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration.property.clientSecretSource"></a>

```csharp
public string ClientSecretSource { get; set; }
```

- *Type:* string

The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#client_secret_source BedrockagentcorePaymentCredentialProvider#client_secret_source}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

The PayPal API environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#environment BedrockagentcorePaymentCredentialProvider#environment}

---

### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfig <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfig {
    string JsonKey = null,
    string SecretId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfig.property.jsonKey">JsonKey</a></code> | <code>string</code> | The JSON key within the secret that contains the credential value. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfig.property.secretId">SecretId</a></code> | <code>string</code> | The ID or ARN of the secret in AWS Secrets Manager. |

---

##### `JsonKey`<sup>Optional</sup> <a name="JsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfig.property.jsonKey"></a>

```csharp
public string JsonKey { get; set; }
```

- *Type:* string

The JSON key within the secret that contains the credential value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#json_key BedrockagentcorePaymentCredentialProvider#json_key}

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfig.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

The ID or ARN of the secret in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#secret_id BedrockagentcorePaymentCredentialProvider#secret_id}

---

### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration {
    string PublishableKey = null,
    string RestrictedKey = null,
    BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfig RestrictedKeyConfig = null,
    string RestrictedKeySource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration.property.publishableKey">PublishableKey</a></code> | <code>string</code> | The Stripe publishable key (pk_live_* or pk_test_*). Its mode must match the restricted key's. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration.property.restrictedKey">RestrictedKey</a></code> | <code>string</code> | The Stripe restricted key (rk_live_* or rk_test_*), supplied inline. Mutually exclusive with RestrictedKeyConfig. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration.property.restrictedKeyConfig">RestrictedKeyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfig</a></code> | A reference to a customer-provided secret stored in AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration.property.restrictedKeySource">RestrictedKeySource</a></code> | <code>string</code> | The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets. |

---

##### `PublishableKey`<sup>Optional</sup> <a name="PublishableKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration.property.publishableKey"></a>

```csharp
public string PublishableKey { get; set; }
```

- *Type:* string

The Stripe publishable key (pk_live_* or pk_test_*). Its mode must match the restricted key's.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#publishable_key BedrockagentcorePaymentCredentialProvider#publishable_key}

---

##### `RestrictedKey`<sup>Optional</sup> <a name="RestrictedKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration.property.restrictedKey"></a>

```csharp
public string RestrictedKey { get; set; }
```

- *Type:* string

The Stripe restricted key (rk_live_* or rk_test_*), supplied inline. Mutually exclusive with RestrictedKeyConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#restricted_key BedrockagentcorePaymentCredentialProvider#restricted_key}

---

##### `RestrictedKeyConfig`<sup>Optional</sup> <a name="RestrictedKeyConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration.property.restrictedKeyConfig"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfig RestrictedKeyConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfig</a>

A reference to a customer-provided secret stored in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#restricted_key_config BedrockagentcorePaymentCredentialProvider#restricted_key_config}

---

##### `RestrictedKeySource`<sup>Optional</sup> <a name="RestrictedKeySource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration.property.restrictedKeySource"></a>

```csharp
public string RestrictedKeySource { get; set; }
```

- *Type:* string

The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#restricted_key_source BedrockagentcorePaymentCredentialProvider#restricted_key_source}

---

### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfig <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfig {
    string JsonKey = null,
    string SecretId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfig.property.jsonKey">JsonKey</a></code> | <code>string</code> | The JSON key within the secret that contains the credential value. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfig.property.secretId">SecretId</a></code> | <code>string</code> | The ID or ARN of the secret in AWS Secrets Manager. |

---

##### `JsonKey`<sup>Optional</sup> <a name="JsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfig.property.jsonKey"></a>

```csharp
public string JsonKey { get; set; }
```

- *Type:* string

The JSON key within the secret that contains the credential value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#json_key BedrockagentcorePaymentCredentialProvider#json_key}

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfig.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

The ID or ARN of the secret in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#secret_id BedrockagentcorePaymentCredentialProvider#secret_id}

---

### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration {
    string AppId = null,
    string AppSecret = null,
    BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig AppSecretConfig = null,
    string AppSecretSource = null,
    string AuthorizationId = null,
    string AuthorizationPrivateKey = null,
    BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig AuthorizationPrivateKeyConfig = null,
    string AuthorizationPrivateKeySource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.appId">AppId</a></code> | <code>string</code> | The app ID provided by Privy. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.appSecret">AppSecret</a></code> | <code>string</code> | The app secret provided by Privy. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.appSecretConfig">AppSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig</a></code> | A reference to a customer-provided secret stored in AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.appSecretSource">AppSecretSource</a></code> | <code>string</code> | The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.authorizationId">AuthorizationId</a></code> | <code>string</code> | The authorization ID for the Stripe Privy integration. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.authorizationPrivateKey">AuthorizationPrivateKey</a></code> | <code>string</code> | The authorization private key for the Stripe Privy integration. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.authorizationPrivateKeyConfig">AuthorizationPrivateKeyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig</a></code> | A reference to a customer-provided secret stored in AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.authorizationPrivateKeySource">AuthorizationPrivateKeySource</a></code> | <code>string</code> | The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets. |

---

##### `AppId`<sup>Optional</sup> <a name="AppId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.appId"></a>

```csharp
public string AppId { get; set; }
```

- *Type:* string

The app ID provided by Privy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#app_id BedrockagentcorePaymentCredentialProvider#app_id}

---

##### `AppSecret`<sup>Optional</sup> <a name="AppSecret" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.appSecret"></a>

```csharp
public string AppSecret { get; set; }
```

- *Type:* string

The app secret provided by Privy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#app_secret BedrockagentcorePaymentCredentialProvider#app_secret}

---

##### `AppSecretConfig`<sup>Optional</sup> <a name="AppSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.appSecretConfig"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig AppSecretConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig</a>

A reference to a customer-provided secret stored in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#app_secret_config BedrockagentcorePaymentCredentialProvider#app_secret_config}

---

##### `AppSecretSource`<sup>Optional</sup> <a name="AppSecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.appSecretSource"></a>

```csharp
public string AppSecretSource { get; set; }
```

- *Type:* string

The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#app_secret_source BedrockagentcorePaymentCredentialProvider#app_secret_source}

---

##### `AuthorizationId`<sup>Optional</sup> <a name="AuthorizationId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.authorizationId"></a>

```csharp
public string AuthorizationId { get; set; }
```

- *Type:* string

The authorization ID for the Stripe Privy integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#authorization_id BedrockagentcorePaymentCredentialProvider#authorization_id}

---

##### `AuthorizationPrivateKey`<sup>Optional</sup> <a name="AuthorizationPrivateKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.authorizationPrivateKey"></a>

```csharp
public string AuthorizationPrivateKey { get; set; }
```

- *Type:* string

The authorization private key for the Stripe Privy integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#authorization_private_key BedrockagentcorePaymentCredentialProvider#authorization_private_key}

---

##### `AuthorizationPrivateKeyConfig`<sup>Optional</sup> <a name="AuthorizationPrivateKeyConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.authorizationPrivateKeyConfig"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig AuthorizationPrivateKeyConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig</a>

A reference to a customer-provided secret stored in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#authorization_private_key_config BedrockagentcorePaymentCredentialProvider#authorization_private_key_config}

---

##### `AuthorizationPrivateKeySource`<sup>Optional</sup> <a name="AuthorizationPrivateKeySource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.authorizationPrivateKeySource"></a>

```csharp
public string AuthorizationPrivateKeySource { get; set; }
```

- *Type:* string

The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#authorization_private_key_source BedrockagentcorePaymentCredentialProvider#authorization_private_key_source}

---

### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig {
    string JsonKey = null,
    string SecretId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig.property.jsonKey">JsonKey</a></code> | <code>string</code> | The JSON key within the secret that contains the credential value. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig.property.secretId">SecretId</a></code> | <code>string</code> | The ID or ARN of the secret in AWS Secrets Manager. |

---

##### `JsonKey`<sup>Optional</sup> <a name="JsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig.property.jsonKey"></a>

```csharp
public string JsonKey { get; set; }
```

- *Type:* string

The JSON key within the secret that contains the credential value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#json_key BedrockagentcorePaymentCredentialProvider#json_key}

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

The ID or ARN of the secret in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#secret_id BedrockagentcorePaymentCredentialProvider#secret_id}

---

### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig {
    string JsonKey = null,
    string SecretId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig.property.jsonKey">JsonKey</a></code> | <code>string</code> | The JSON key within the secret that contains the credential value. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig.property.secretId">SecretId</a></code> | <code>string</code> | The ID or ARN of the secret in AWS Secrets Manager. |

---

##### `JsonKey`<sup>Optional</sup> <a name="JsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig.property.jsonKey"></a>

```csharp
public string JsonKey { get; set; }
```

- *Type:* string

The JSON key within the secret that contains the credential value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#json_key BedrockagentcorePaymentCredentialProvider#json_key}

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

The ID or ARN of the secret in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#secret_id BedrockagentcorePaymentCredentialProvider#secret_id}

---

### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput {

};
```


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfiguration <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfiguration {

};
```


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArn <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArn {

};
```


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration {

};
```


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn {

};
```


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn {

};
```


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfiguration <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfiguration {

};
```


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArn <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArn {

};
```


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfiguration <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfiguration {

};
```


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArn <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArn {

};
```


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration {

};
```


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn {

};
```


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn {

};
```


### BedrockagentcorePaymentCredentialProviderTags <a name="BedrockagentcorePaymentCredentialProviderTags" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#key BedrockagentcorePaymentCredentialProvider#key}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#value BedrockagentcorePaymentCredentialProvider#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#key BedrockagentcorePaymentCredentialProvider#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/bedrockagentcore_payment_credential_provider#value BedrockagentcorePaymentCredentialProvider#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.resetJsonKey">ResetJsonKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.resetSecretId">ResetSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJsonKey` <a name="ResetJsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.resetJsonKey"></a>

```csharp
private void ResetJsonKey()
```

##### `ResetSecretId` <a name="ResetSecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.resetSecretId"></a>

```csharp
private void ResetSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.property.jsonKeyInput">JsonKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.property.jsonKey">JsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JsonKeyInput`<sup>Optional</sup> <a name="JsonKeyInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.property.jsonKeyInput"></a>

```csharp
public string JsonKeyInput { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `JsonKey`<sup>Required</sup> <a name="JsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.property.jsonKey"></a>

```csharp
public string JsonKey { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfig</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.putAuthorizationTokenConfig">PutAuthorizationTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.resetAmazonPayRegion">ResetAmazonPayRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.resetAuthorizationToken">ResetAuthorizationToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.resetAuthorizationTokenConfig">ResetAuthorizationTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.resetAuthorizationTokenSource">ResetAuthorizationTokenSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.resetMerchantId">ResetMerchantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.resetStoreId">ResetStoreId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizationTokenConfig` <a name="PutAuthorizationTokenConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.putAuthorizationTokenConfig"></a>

```csharp
private void PutAuthorizationTokenConfig(BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.putAuthorizationTokenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfig</a>

---

##### `ResetAmazonPayRegion` <a name="ResetAmazonPayRegion" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.resetAmazonPayRegion"></a>

```csharp
private void ResetAmazonPayRegion()
```

##### `ResetAuthorizationToken` <a name="ResetAuthorizationToken" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.resetAuthorizationToken"></a>

```csharp
private void ResetAuthorizationToken()
```

##### `ResetAuthorizationTokenConfig` <a name="ResetAuthorizationTokenConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.resetAuthorizationTokenConfig"></a>

```csharp
private void ResetAuthorizationTokenConfig()
```

##### `ResetAuthorizationTokenSource` <a name="ResetAuthorizationTokenSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.resetAuthorizationTokenSource"></a>

```csharp
private void ResetAuthorizationTokenSource()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetMerchantId` <a name="ResetMerchantId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.resetMerchantId"></a>

```csharp
private void ResetMerchantId()
```

##### `ResetStoreId` <a name="ResetStoreId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.resetStoreId"></a>

```csharp
private void ResetStoreId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.authorizationTokenConfig">AuthorizationTokenConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.amazonPayRegionInput">AmazonPayRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.authorizationTokenConfigInput">AuthorizationTokenConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.authorizationTokenInput">AuthorizationTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.authorizationTokenSourceInput">AuthorizationTokenSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.merchantIdInput">MerchantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.storeIdInput">StoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.amazonPayRegion">AmazonPayRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.authorizationToken">AuthorizationToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.authorizationTokenSource">AuthorizationTokenSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.merchantId">MerchantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.storeId">StoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationTokenConfig`<sup>Required</sup> <a name="AuthorizationTokenConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.authorizationTokenConfig"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference AuthorizationTokenConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfigOutputReference</a>

---

##### `AmazonPayRegionInput`<sup>Optional</sup> <a name="AmazonPayRegionInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.amazonPayRegionInput"></a>

```csharp
public string AmazonPayRegionInput { get; }
```

- *Type:* string

---

##### `AuthorizationTokenConfigInput`<sup>Optional</sup> <a name="AuthorizationTokenConfigInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.authorizationTokenConfigInput"></a>

```csharp
public IResolvable|BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfig AuthorizationTokenConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationAuthorizationTokenConfig</a>

---

##### `AuthorizationTokenInput`<sup>Optional</sup> <a name="AuthorizationTokenInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.authorizationTokenInput"></a>

```csharp
public string AuthorizationTokenInput { get; }
```

- *Type:* string

---

##### `AuthorizationTokenSourceInput`<sup>Optional</sup> <a name="AuthorizationTokenSourceInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.authorizationTokenSourceInput"></a>

```csharp
public string AuthorizationTokenSourceInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `MerchantIdInput`<sup>Optional</sup> <a name="MerchantIdInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.merchantIdInput"></a>

```csharp
public string MerchantIdInput { get; }
```

- *Type:* string

---

##### `StoreIdInput`<sup>Optional</sup> <a name="StoreIdInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.storeIdInput"></a>

```csharp
public string StoreIdInput { get; }
```

- *Type:* string

---

##### `AmazonPayRegion`<sup>Required</sup> <a name="AmazonPayRegion" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.amazonPayRegion"></a>

```csharp
public string AmazonPayRegion { get; }
```

- *Type:* string

---

##### `AuthorizationToken`<sup>Required</sup> <a name="AuthorizationToken" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.authorizationToken"></a>

```csharp
public string AuthorizationToken { get; }
```

- *Type:* string

---

##### `AuthorizationTokenSource`<sup>Required</sup> <a name="AuthorizationTokenSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.authorizationTokenSource"></a>

```csharp
public string AuthorizationTokenSource { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `MerchantId`<sup>Required</sup> <a name="MerchantId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.merchantId"></a>

```csharp
public string MerchantId { get; }
```

- *Type:* string

---

##### `StoreId`<sup>Required</sup> <a name="StoreId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.storeId"></a>

```csharp
public string StoreId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.resetJsonKey">ResetJsonKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.resetSecretId">ResetSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJsonKey` <a name="ResetJsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.resetJsonKey"></a>

```csharp
private void ResetJsonKey()
```

##### `ResetSecretId` <a name="ResetSecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.resetSecretId"></a>

```csharp
private void ResetSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.jsonKeyInput">JsonKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.jsonKey">JsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JsonKeyInput`<sup>Optional</sup> <a name="JsonKeyInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.jsonKeyInput"></a>

```csharp
public string JsonKeyInput { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `JsonKey`<sup>Required</sup> <a name="JsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.jsonKey"></a>

```csharp
public string JsonKey { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.putApiKeySecretConfig">PutApiKeySecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.putWalletSecretConfig">PutWalletSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetApiKeyId">ResetApiKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetApiKeySecret">ResetApiKeySecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetApiKeySecretConfig">ResetApiKeySecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetApiKeySecretSource">ResetApiKeySecretSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetWalletSecret">ResetWalletSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetWalletSecretConfig">ResetWalletSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetWalletSecretSource">ResetWalletSecretSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKeySecretConfig` <a name="PutApiKeySecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.putApiKeySecretConfig"></a>

```csharp
private void PutApiKeySecretConfig(BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.putApiKeySecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig</a>

---

##### `PutWalletSecretConfig` <a name="PutWalletSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.putWalletSecretConfig"></a>

```csharp
private void PutWalletSecretConfig(BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.putWalletSecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig</a>

---

##### `ResetApiKeyId` <a name="ResetApiKeyId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetApiKeyId"></a>

```csharp
private void ResetApiKeyId()
```

##### `ResetApiKeySecret` <a name="ResetApiKeySecret" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetApiKeySecret"></a>

```csharp
private void ResetApiKeySecret()
```

##### `ResetApiKeySecretConfig` <a name="ResetApiKeySecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetApiKeySecretConfig"></a>

```csharp
private void ResetApiKeySecretConfig()
```

##### `ResetApiKeySecretSource` <a name="ResetApiKeySecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetApiKeySecretSource"></a>

```csharp
private void ResetApiKeySecretSource()
```

##### `ResetWalletSecret` <a name="ResetWalletSecret" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetWalletSecret"></a>

```csharp
private void ResetWalletSecret()
```

##### `ResetWalletSecretConfig` <a name="ResetWalletSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetWalletSecretConfig"></a>

```csharp
private void ResetWalletSecretConfig()
```

##### `ResetWalletSecretSource` <a name="ResetWalletSecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetWalletSecretSource"></a>

```csharp
private void ResetWalletSecretSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretConfig">ApiKeySecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretConfig">WalletSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeyIdInput">ApiKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretConfigInput">ApiKeySecretConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretInput">ApiKeySecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretSourceInput">ApiKeySecretSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretConfigInput">WalletSecretConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretInput">WalletSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretSourceInput">WalletSecretSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeyId">ApiKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecret">ApiKeySecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretSource">ApiKeySecretSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecret">WalletSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretSource">WalletSecretSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeySecretConfig`<sup>Required</sup> <a name="ApiKeySecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretConfig"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference ApiKeySecretConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference</a>

---

##### `WalletSecretConfig`<sup>Required</sup> <a name="WalletSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretConfig"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference WalletSecretConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference</a>

---

##### `ApiKeyIdInput`<sup>Optional</sup> <a name="ApiKeyIdInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeyIdInput"></a>

```csharp
public string ApiKeyIdInput { get; }
```

- *Type:* string

---

##### `ApiKeySecretConfigInput`<sup>Optional</sup> <a name="ApiKeySecretConfigInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretConfigInput"></a>

```csharp
public IResolvable|BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig ApiKeySecretConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig</a>

---

##### `ApiKeySecretInput`<sup>Optional</sup> <a name="ApiKeySecretInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretInput"></a>

```csharp
public string ApiKeySecretInput { get; }
```

- *Type:* string

---

##### `ApiKeySecretSourceInput`<sup>Optional</sup> <a name="ApiKeySecretSourceInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretSourceInput"></a>

```csharp
public string ApiKeySecretSourceInput { get; }
```

- *Type:* string

---

##### `WalletSecretConfigInput`<sup>Optional</sup> <a name="WalletSecretConfigInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretConfigInput"></a>

```csharp
public IResolvable|BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig WalletSecretConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig</a>

---

##### `WalletSecretInput`<sup>Optional</sup> <a name="WalletSecretInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretInput"></a>

```csharp
public string WalletSecretInput { get; }
```

- *Type:* string

---

##### `WalletSecretSourceInput`<sup>Optional</sup> <a name="WalletSecretSourceInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretSourceInput"></a>

```csharp
public string WalletSecretSourceInput { get; }
```

- *Type:* string

---

##### `ApiKeyId`<sup>Required</sup> <a name="ApiKeyId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeyId"></a>

```csharp
public string ApiKeyId { get; }
```

- *Type:* string

---

##### `ApiKeySecret`<sup>Required</sup> <a name="ApiKeySecret" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecret"></a>

```csharp
public string ApiKeySecret { get; }
```

- *Type:* string

---

##### `ApiKeySecretSource`<sup>Required</sup> <a name="ApiKeySecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretSource"></a>

```csharp
public string ApiKeySecretSource { get; }
```

- *Type:* string

---

##### `WalletSecret`<sup>Required</sup> <a name="WalletSecret" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecret"></a>

```csharp
public string WalletSecret { get; }
```

- *Type:* string

---

##### `WalletSecretSource`<sup>Required</sup> <a name="WalletSecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretSource"></a>

```csharp
public string WalletSecretSource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.resetJsonKey">ResetJsonKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.resetSecretId">ResetSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJsonKey` <a name="ResetJsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.resetJsonKey"></a>

```csharp
private void ResetJsonKey()
```

##### `ResetSecretId` <a name="ResetSecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.resetSecretId"></a>

```csharp
private void ResetSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.jsonKeyInput">JsonKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.jsonKey">JsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JsonKeyInput`<sup>Optional</sup> <a name="JsonKeyInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.jsonKeyInput"></a>

```csharp
public string JsonKeyInput { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `JsonKey`<sup>Required</sup> <a name="JsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.jsonKey"></a>

```csharp
public string JsonKey { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.putAmazonPayConfiguration">PutAmazonPayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.putCoinbaseCdpConfiguration">PutCoinbaseCdpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.putPayPalConfiguration">PutPayPalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.putStripeConfiguration">PutStripeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.putStripePrivyConfiguration">PutStripePrivyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resetAmazonPayConfiguration">ResetAmazonPayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resetCoinbaseCdpConfiguration">ResetCoinbaseCdpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resetPayPalConfiguration">ResetPayPalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resetStripeConfiguration">ResetStripeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resetStripePrivyConfiguration">ResetStripePrivyConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAmazonPayConfiguration` <a name="PutAmazonPayConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.putAmazonPayConfiguration"></a>

```csharp
private void PutAmazonPayConfiguration(BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.putAmazonPayConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration</a>

---

##### `PutCoinbaseCdpConfiguration` <a name="PutCoinbaseCdpConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.putCoinbaseCdpConfiguration"></a>

```csharp
private void PutCoinbaseCdpConfiguration(BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.putCoinbaseCdpConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration</a>

---

##### `PutPayPalConfiguration` <a name="PutPayPalConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.putPayPalConfiguration"></a>

```csharp
private void PutPayPalConfiguration(BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.putPayPalConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration</a>

---

##### `PutStripeConfiguration` <a name="PutStripeConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.putStripeConfiguration"></a>

```csharp
private void PutStripeConfiguration(BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.putStripeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration</a>

---

##### `PutStripePrivyConfiguration` <a name="PutStripePrivyConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.putStripePrivyConfiguration"></a>

```csharp
private void PutStripePrivyConfiguration(BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.putStripePrivyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration</a>

---

##### `ResetAmazonPayConfiguration` <a name="ResetAmazonPayConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resetAmazonPayConfiguration"></a>

```csharp
private void ResetAmazonPayConfiguration()
```

##### `ResetCoinbaseCdpConfiguration` <a name="ResetCoinbaseCdpConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resetCoinbaseCdpConfiguration"></a>

```csharp
private void ResetCoinbaseCdpConfiguration()
```

##### `ResetPayPalConfiguration` <a name="ResetPayPalConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resetPayPalConfiguration"></a>

```csharp
private void ResetPayPalConfiguration()
```

##### `ResetStripeConfiguration` <a name="ResetStripeConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resetStripeConfiguration"></a>

```csharp
private void ResetStripeConfiguration()
```

##### `ResetStripePrivyConfiguration` <a name="ResetStripePrivyConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resetStripePrivyConfiguration"></a>

```csharp
private void ResetStripePrivyConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.amazonPayConfiguration">AmazonPayConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.coinbaseCdpConfiguration">CoinbaseCdpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.payPalConfiguration">PayPalConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.stripeConfiguration">StripeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.stripePrivyConfiguration">StripePrivyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.amazonPayConfigurationInput">AmazonPayConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.coinbaseCdpConfigurationInput">CoinbaseCdpConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.payPalConfigurationInput">PayPalConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.stripeConfigurationInput">StripeConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.stripePrivyConfigurationInput">StripePrivyConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput">BedrockagentcorePaymentCredentialProviderProviderConfigurationInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AmazonPayConfiguration`<sup>Required</sup> <a name="AmazonPayConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.amazonPayConfiguration"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference AmazonPayConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfigurationOutputReference</a>

---

##### `CoinbaseCdpConfiguration`<sup>Required</sup> <a name="CoinbaseCdpConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.coinbaseCdpConfiguration"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference CoinbaseCdpConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference</a>

---

##### `PayPalConfiguration`<sup>Required</sup> <a name="PayPalConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.payPalConfiguration"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference PayPalConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference</a>

---

##### `StripeConfiguration`<sup>Required</sup> <a name="StripeConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.stripeConfiguration"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference StripeConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference</a>

---

##### `StripePrivyConfiguration`<sup>Required</sup> <a name="StripePrivyConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.stripePrivyConfiguration"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference StripePrivyConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference</a>

---

##### `AmazonPayConfigurationInput`<sup>Optional</sup> <a name="AmazonPayConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.amazonPayConfigurationInput"></a>

```csharp
public IResolvable|BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration AmazonPayConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputAmazonPayConfiguration</a>

---

##### `CoinbaseCdpConfigurationInput`<sup>Optional</sup> <a name="CoinbaseCdpConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.coinbaseCdpConfigurationInput"></a>

```csharp
public IResolvable|BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration CoinbaseCdpConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration</a>

---

##### `PayPalConfigurationInput`<sup>Optional</sup> <a name="PayPalConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.payPalConfigurationInput"></a>

```csharp
public IResolvable|BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration PayPalConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration</a>

---

##### `StripeConfigurationInput`<sup>Optional</sup> <a name="StripeConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.stripeConfigurationInput"></a>

```csharp
public IResolvable|BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration StripeConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration</a>

---

##### `StripePrivyConfigurationInput`<sup>Optional</sup> <a name="StripePrivyConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.stripePrivyConfigurationInput"></a>

```csharp
public IResolvable|BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration StripePrivyConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcorePaymentCredentialProviderProviderConfigurationInput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput">BedrockagentcorePaymentCredentialProviderProviderConfigurationInput</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.resetJsonKey">ResetJsonKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.resetSecretId">ResetSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJsonKey` <a name="ResetJsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.resetJsonKey"></a>

```csharp
private void ResetJsonKey()
```

##### `ResetSecretId` <a name="ResetSecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.resetSecretId"></a>

```csharp
private void ResetSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.property.jsonKeyInput">JsonKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.property.jsonKey">JsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JsonKeyInput`<sup>Optional</sup> <a name="JsonKeyInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.property.jsonKeyInput"></a>

```csharp
public string JsonKeyInput { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `JsonKey`<sup>Required</sup> <a name="JsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.property.jsonKey"></a>

```csharp
public string JsonKey { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfig</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.putClientSecretConfig">PutClientSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.resetClientSecretConfig">ResetClientSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.resetClientSecretSource">ResetClientSecretSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientSecretConfig` <a name="PutClientSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.putClientSecretConfig"></a>

```csharp
private void PutClientSecretConfig(BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.putClientSecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfig</a>

---

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetClientSecretConfig` <a name="ResetClientSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.resetClientSecretConfig"></a>

```csharp
private void ResetClientSecretConfig()
```

##### `ResetClientSecretSource` <a name="ResetClientSecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.resetClientSecretSource"></a>

```csharp
private void ResetClientSecretSource()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.property.clientSecretConfig">ClientSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.property.clientSecretConfigInput">ClientSecretConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.property.clientSecretSourceInput">ClientSecretSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.property.clientSecretSource">ClientSecretSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientSecretConfig`<sup>Required</sup> <a name="ClientSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.property.clientSecretConfig"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference ClientSecretConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfigOutputReference</a>

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretConfigInput`<sup>Optional</sup> <a name="ClientSecretConfigInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.property.clientSecretConfigInput"></a>

```csharp
public IResolvable|BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfig ClientSecretConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationClientSecretConfig</a>

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ClientSecretSourceInput`<sup>Optional</sup> <a name="ClientSecretSourceInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.property.clientSecretSourceInput"></a>

```csharp
public string ClientSecretSourceInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `ClientSecretSource`<sup>Required</sup> <a name="ClientSecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.property.clientSecretSource"></a>

```csharp
public string ClientSecretSource { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputPayPalConfiguration</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.putRestrictedKeyConfig">PutRestrictedKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.resetPublishableKey">ResetPublishableKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.resetRestrictedKey">ResetRestrictedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.resetRestrictedKeyConfig">ResetRestrictedKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.resetRestrictedKeySource">ResetRestrictedKeySource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRestrictedKeyConfig` <a name="PutRestrictedKeyConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.putRestrictedKeyConfig"></a>

```csharp
private void PutRestrictedKeyConfig(BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.putRestrictedKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfig</a>

---

##### `ResetPublishableKey` <a name="ResetPublishableKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.resetPublishableKey"></a>

```csharp
private void ResetPublishableKey()
```

##### `ResetRestrictedKey` <a name="ResetRestrictedKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.resetRestrictedKey"></a>

```csharp
private void ResetRestrictedKey()
```

##### `ResetRestrictedKeyConfig` <a name="ResetRestrictedKeyConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.resetRestrictedKeyConfig"></a>

```csharp
private void ResetRestrictedKeyConfig()
```

##### `ResetRestrictedKeySource` <a name="ResetRestrictedKeySource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.resetRestrictedKeySource"></a>

```csharp
private void ResetRestrictedKeySource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.property.restrictedKeyConfig">RestrictedKeyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.property.publishableKeyInput">PublishableKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.property.restrictedKeyConfigInput">RestrictedKeyConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.property.restrictedKeyInput">RestrictedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.property.restrictedKeySourceInput">RestrictedKeySourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.property.publishableKey">PublishableKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.property.restrictedKey">RestrictedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.property.restrictedKeySource">RestrictedKeySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RestrictedKeyConfig`<sup>Required</sup> <a name="RestrictedKeyConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.property.restrictedKeyConfig"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference RestrictedKeyConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference</a>

---

##### `PublishableKeyInput`<sup>Optional</sup> <a name="PublishableKeyInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.property.publishableKeyInput"></a>

```csharp
public string PublishableKeyInput { get; }
```

- *Type:* string

---

##### `RestrictedKeyConfigInput`<sup>Optional</sup> <a name="RestrictedKeyConfigInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.property.restrictedKeyConfigInput"></a>

```csharp
public IResolvable|BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfig RestrictedKeyConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfig</a>

---

##### `RestrictedKeyInput`<sup>Optional</sup> <a name="RestrictedKeyInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.property.restrictedKeyInput"></a>

```csharp
public string RestrictedKeyInput { get; }
```

- *Type:* string

---

##### `RestrictedKeySourceInput`<sup>Optional</sup> <a name="RestrictedKeySourceInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.property.restrictedKeySourceInput"></a>

```csharp
public string RestrictedKeySourceInput { get; }
```

- *Type:* string

---

##### `PublishableKey`<sup>Required</sup> <a name="PublishableKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.property.publishableKey"></a>

```csharp
public string PublishableKey { get; }
```

- *Type:* string

---

##### `RestrictedKey`<sup>Required</sup> <a name="RestrictedKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.property.restrictedKey"></a>

```csharp
public string RestrictedKey { get; }
```

- *Type:* string

---

##### `RestrictedKeySource`<sup>Required</sup> <a name="RestrictedKeySource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.property.restrictedKeySource"></a>

```csharp
public string RestrictedKeySource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfiguration</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.resetJsonKey">ResetJsonKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.resetSecretId">ResetSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJsonKey` <a name="ResetJsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.resetJsonKey"></a>

```csharp
private void ResetJsonKey()
```

##### `ResetSecretId` <a name="ResetSecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.resetSecretId"></a>

```csharp
private void ResetSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.property.jsonKeyInput">JsonKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.property.jsonKey">JsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JsonKeyInput`<sup>Optional</sup> <a name="JsonKeyInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.property.jsonKeyInput"></a>

```csharp
public string JsonKeyInput { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `JsonKey`<sup>Required</sup> <a name="JsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.property.jsonKey"></a>

```csharp
public string JsonKey { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripeConfigurationRestrictedKeyConfig</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.resetJsonKey">ResetJsonKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.resetSecretId">ResetSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJsonKey` <a name="ResetJsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.resetJsonKey"></a>

```csharp
private void ResetJsonKey()
```

##### `ResetSecretId` <a name="ResetSecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.resetSecretId"></a>

```csharp
private void ResetSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.jsonKeyInput">JsonKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.jsonKey">JsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JsonKeyInput`<sup>Optional</sup> <a name="JsonKeyInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.jsonKeyInput"></a>

```csharp
public string JsonKeyInput { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `JsonKey`<sup>Required</sup> <a name="JsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.jsonKey"></a>

```csharp
public string JsonKey { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.resetJsonKey">ResetJsonKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.resetSecretId">ResetSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJsonKey` <a name="ResetJsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.resetJsonKey"></a>

```csharp
private void ResetJsonKey()
```

##### `ResetSecretId` <a name="ResetSecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.resetSecretId"></a>

```csharp
private void ResetSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.jsonKeyInput">JsonKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.jsonKey">JsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JsonKeyInput`<sup>Optional</sup> <a name="JsonKeyInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.jsonKeyInput"></a>

```csharp
public string JsonKeyInput { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `JsonKey`<sup>Required</sup> <a name="JsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.jsonKey"></a>

```csharp
public string JsonKey { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.putAppSecretConfig">PutAppSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.putAuthorizationPrivateKeyConfig">PutAuthorizationPrivateKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAppId">ResetAppId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAppSecret">ResetAppSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAppSecretConfig">ResetAppSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAppSecretSource">ResetAppSecretSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAuthorizationId">ResetAuthorizationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAuthorizationPrivateKey">ResetAuthorizationPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAuthorizationPrivateKeyConfig">ResetAuthorizationPrivateKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAuthorizationPrivateKeySource">ResetAuthorizationPrivateKeySource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAppSecretConfig` <a name="PutAppSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.putAppSecretConfig"></a>

```csharp
private void PutAppSecretConfig(BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.putAppSecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig</a>

---

##### `PutAuthorizationPrivateKeyConfig` <a name="PutAuthorizationPrivateKeyConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.putAuthorizationPrivateKeyConfig"></a>

```csharp
private void PutAuthorizationPrivateKeyConfig(BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.putAuthorizationPrivateKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig</a>

---

##### `ResetAppId` <a name="ResetAppId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAppId"></a>

```csharp
private void ResetAppId()
```

##### `ResetAppSecret` <a name="ResetAppSecret" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAppSecret"></a>

```csharp
private void ResetAppSecret()
```

##### `ResetAppSecretConfig` <a name="ResetAppSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAppSecretConfig"></a>

```csharp
private void ResetAppSecretConfig()
```

##### `ResetAppSecretSource` <a name="ResetAppSecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAppSecretSource"></a>

```csharp
private void ResetAppSecretSource()
```

##### `ResetAuthorizationId` <a name="ResetAuthorizationId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAuthorizationId"></a>

```csharp
private void ResetAuthorizationId()
```

##### `ResetAuthorizationPrivateKey` <a name="ResetAuthorizationPrivateKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAuthorizationPrivateKey"></a>

```csharp
private void ResetAuthorizationPrivateKey()
```

##### `ResetAuthorizationPrivateKeyConfig` <a name="ResetAuthorizationPrivateKeyConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAuthorizationPrivateKeyConfig"></a>

```csharp
private void ResetAuthorizationPrivateKeyConfig()
```

##### `ResetAuthorizationPrivateKeySource` <a name="ResetAuthorizationPrivateKeySource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAuthorizationPrivateKeySource"></a>

```csharp
private void ResetAuthorizationPrivateKeySource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretConfig">AppSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyConfig">AuthorizationPrivateKeyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appIdInput">AppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretConfigInput">AppSecretConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretInput">AppSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretSourceInput">AppSecretSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationIdInput">AuthorizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyConfigInput">AuthorizationPrivateKeyConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyInput">AuthorizationPrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeySourceInput">AuthorizationPrivateKeySourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecret">AppSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretSource">AppSecretSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationId">AuthorizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKey">AuthorizationPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeySource">AuthorizationPrivateKeySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppSecretConfig`<sup>Required</sup> <a name="AppSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretConfig"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference AppSecretConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference</a>

---

##### `AuthorizationPrivateKeyConfig`<sup>Required</sup> <a name="AuthorizationPrivateKeyConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyConfig"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference AuthorizationPrivateKeyConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference</a>

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appIdInput"></a>

```csharp
public string AppIdInput { get; }
```

- *Type:* string

---

##### `AppSecretConfigInput`<sup>Optional</sup> <a name="AppSecretConfigInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretConfigInput"></a>

```csharp
public IResolvable|BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig AppSecretConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig</a>

---

##### `AppSecretInput`<sup>Optional</sup> <a name="AppSecretInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretInput"></a>

```csharp
public string AppSecretInput { get; }
```

- *Type:* string

---

##### `AppSecretSourceInput`<sup>Optional</sup> <a name="AppSecretSourceInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretSourceInput"></a>

```csharp
public string AppSecretSourceInput { get; }
```

- *Type:* string

---

##### `AuthorizationIdInput`<sup>Optional</sup> <a name="AuthorizationIdInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationIdInput"></a>

```csharp
public string AuthorizationIdInput { get; }
```

- *Type:* string

---

##### `AuthorizationPrivateKeyConfigInput`<sup>Optional</sup> <a name="AuthorizationPrivateKeyConfigInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyConfigInput"></a>

```csharp
public IResolvable|BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig AuthorizationPrivateKeyConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig</a>

---

##### `AuthorizationPrivateKeyInput`<sup>Optional</sup> <a name="AuthorizationPrivateKeyInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyInput"></a>

```csharp
public string AuthorizationPrivateKeyInput { get; }
```

- *Type:* string

---

##### `AuthorizationPrivateKeySourceInput`<sup>Optional</sup> <a name="AuthorizationPrivateKeySourceInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeySourceInput"></a>

```csharp
public string AuthorizationPrivateKeySourceInput { get; }
```

- *Type:* string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `AppSecret`<sup>Required</sup> <a name="AppSecret" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecret"></a>

```csharp
public string AppSecret { get; }
```

- *Type:* string

---

##### `AppSecretSource`<sup>Required</sup> <a name="AppSecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretSource"></a>

```csharp
public string AppSecretSource { get; }
```

- *Type:* string

---

##### `AuthorizationId`<sup>Required</sup> <a name="AuthorizationId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationId"></a>

```csharp
public string AuthorizationId { get; }
```

- *Type:* string

---

##### `AuthorizationPrivateKey`<sup>Required</sup> <a name="AuthorizationPrivateKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKey"></a>

```csharp
public string AuthorizationPrivateKey { get; }
```

- *Type:* string

---

##### `AuthorizationPrivateKeySource`<sup>Required</sup> <a name="AuthorizationPrivateKeySource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeySource"></a>

```csharp
public string AuthorizationPrivateKeySource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArn">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArn InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArn">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArn</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.property.amazonPayRegion">AmazonPayRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.property.authorizationTokenArn">AuthorizationTokenArn</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.property.authorizationTokenJsonKey">AuthorizationTokenJsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.property.authorizationTokenSource">AuthorizationTokenSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.property.merchantId">MerchantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.property.storeId">StoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AmazonPayRegion`<sup>Required</sup> <a name="AmazonPayRegion" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.property.amazonPayRegion"></a>

```csharp
public string AmazonPayRegion { get; }
```

- *Type:* string

---

##### `AuthorizationTokenArn`<sup>Required</sup> <a name="AuthorizationTokenArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.property.authorizationTokenArn"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference AuthorizationTokenArn { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationAuthorizationTokenArnOutputReference</a>

---

##### `AuthorizationTokenJsonKey`<sup>Required</sup> <a name="AuthorizationTokenJsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.property.authorizationTokenJsonKey"></a>

```csharp
public string AuthorizationTokenJsonKey { get; }
```

- *Type:* string

---

##### `AuthorizationTokenSource`<sup>Required</sup> <a name="AuthorizationTokenSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.property.authorizationTokenSource"></a>

```csharp
public string AuthorizationTokenSource { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `MerchantId`<sup>Required</sup> <a name="MerchantId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.property.merchantId"></a>

```csharp
public string MerchantId { get; }
```

- *Type:* string

---

##### `StoreId`<sup>Required</sup> <a name="StoreId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.property.storeId"></a>

```csharp
public string StoreId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfiguration</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeyId">ApiKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretArn">ApiKeySecretArn</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretJsonKey">ApiKeySecretJsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretSource">ApiKeySecretSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.walletSecretArn">WalletSecretArn</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.walletSecretJsonKey">WalletSecretJsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.walletSecretSource">WalletSecretSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeyId`<sup>Required</sup> <a name="ApiKeyId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeyId"></a>

```csharp
public string ApiKeyId { get; }
```

- *Type:* string

---

##### `ApiKeySecretArn`<sup>Required</sup> <a name="ApiKeySecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretArn"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference ApiKeySecretArn { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference</a>

---

##### `ApiKeySecretJsonKey`<sup>Required</sup> <a name="ApiKeySecretJsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretJsonKey"></a>

```csharp
public string ApiKeySecretJsonKey { get; }
```

- *Type:* string

---

##### `ApiKeySecretSource`<sup>Required</sup> <a name="ApiKeySecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretSource"></a>

```csharp
public string ApiKeySecretSource { get; }
```

- *Type:* string

---

##### `WalletSecretArn`<sup>Required</sup> <a name="WalletSecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.walletSecretArn"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference WalletSecretArn { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference</a>

---

##### `WalletSecretJsonKey`<sup>Required</sup> <a name="WalletSecretJsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.walletSecretJsonKey"></a>

```csharp
public string WalletSecretJsonKey { get; }
```

- *Type:* string

---

##### `WalletSecretSource`<sup>Required</sup> <a name="WalletSecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.walletSecretSource"></a>

```csharp
public string WalletSecretSource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.amazonPayConfiguration">AmazonPayConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.coinbaseCdpConfiguration">CoinbaseCdpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.payPalConfiguration">PayPalConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.stripeConfiguration">StripeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.stripePrivyConfiguration">StripePrivyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AmazonPayConfiguration`<sup>Required</sup> <a name="AmazonPayConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.amazonPayConfiguration"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference AmazonPayConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputAmazonPayConfigurationOutputReference</a>

---

##### `CoinbaseCdpConfiguration`<sup>Required</sup> <a name="CoinbaseCdpConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.coinbaseCdpConfiguration"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference CoinbaseCdpConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference</a>

---

##### `PayPalConfiguration`<sup>Required</sup> <a name="PayPalConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.payPalConfiguration"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference PayPalConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference</a>

---

##### `StripeConfiguration`<sup>Required</sup> <a name="StripeConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.stripeConfiguration"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference StripeConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference</a>

---

##### `StripePrivyConfiguration`<sup>Required</sup> <a name="StripePrivyConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.stripePrivyConfiguration"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference StripePrivyConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArn">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArn InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArn">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArn</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.property.clientSecretArn">ClientSecretArn</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.property.clientSecretJsonKey">ClientSecretJsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.property.clientSecretSource">ClientSecretSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecretArn`<sup>Required</sup> <a name="ClientSecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.property.clientSecretArn"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference ClientSecretArn { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationClientSecretArnOutputReference</a>

---

##### `ClientSecretJsonKey`<sup>Required</sup> <a name="ClientSecretJsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.property.clientSecretJsonKey"></a>

```csharp
public string ClientSecretJsonKey { get; }
```

- *Type:* string

---

##### `ClientSecretSource`<sup>Required</sup> <a name="ClientSecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.property.clientSecretSource"></a>

```csharp
public string ClientSecretSource { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfigurationOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputPayPalConfiguration</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.property.publishableKey">PublishableKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.property.restrictedKeyArn">RestrictedKeyArn</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.property.restrictedKeyJsonKey">RestrictedKeyJsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.property.restrictedKeySource">RestrictedKeySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublishableKey`<sup>Required</sup> <a name="PublishableKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.property.publishableKey"></a>

```csharp
public string PublishableKey { get; }
```

- *Type:* string

---

##### `RestrictedKeyArn`<sup>Required</sup> <a name="RestrictedKeyArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.property.restrictedKeyArn"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference RestrictedKeyArn { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference</a>

---

##### `RestrictedKeyJsonKey`<sup>Required</sup> <a name="RestrictedKeyJsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.property.restrictedKeyJsonKey"></a>

```csharp
public string RestrictedKeyJsonKey { get; }
```

- *Type:* string

---

##### `RestrictedKeySource`<sup>Required</sup> <a name="RestrictedKeySource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.property.restrictedKeySource"></a>

```csharp
public string RestrictedKeySource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfiguration</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArn">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArnOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArn InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArn">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripeConfigurationRestrictedKeyArn</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appSecretArn">AppSecretArn</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appSecretJsonKey">AppSecretJsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appSecretSource">AppSecretSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationId">AuthorizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyArn">AuthorizationPrivateKeyArn</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyJsonKey">AuthorizationPrivateKeyJsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeySource">AuthorizationPrivateKeySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `AppSecretArn`<sup>Required</sup> <a name="AppSecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appSecretArn"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference AppSecretArn { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference</a>

---

##### `AppSecretJsonKey`<sup>Required</sup> <a name="AppSecretJsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appSecretJsonKey"></a>

```csharp
public string AppSecretJsonKey { get; }
```

- *Type:* string

---

##### `AppSecretSource`<sup>Required</sup> <a name="AppSecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appSecretSource"></a>

```csharp
public string AppSecretSource { get; }
```

- *Type:* string

---

##### `AuthorizationId`<sup>Required</sup> <a name="AuthorizationId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationId"></a>

```csharp
public string AuthorizationId { get; }
```

- *Type:* string

---

##### `AuthorizationPrivateKeyArn`<sup>Required</sup> <a name="AuthorizationPrivateKeyArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyArn"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference AuthorizationPrivateKeyArn { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference</a>

---

##### `AuthorizationPrivateKeyJsonKey`<sup>Required</sup> <a name="AuthorizationPrivateKeyJsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyJsonKey"></a>

```csharp
public string AuthorizationPrivateKeyJsonKey { get; }
```

- *Type:* string

---

##### `AuthorizationPrivateKeySource`<sup>Required</sup> <a name="AuthorizationPrivateKeySource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeySource"></a>

```csharp
public string AuthorizationPrivateKeySource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration</a>

---


### BedrockagentcorePaymentCredentialProviderTagsList <a name="BedrockagentcorePaymentCredentialProviderTagsList" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.get"></a>

```csharp
private BedrockagentcorePaymentCredentialProviderTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags">BedrockagentcorePaymentCredentialProviderTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcorePaymentCredentialProviderTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags">BedrockagentcorePaymentCredentialProviderTags</a>[]

---


### BedrockagentcorePaymentCredentialProviderTagsOutputReference <a name="BedrockagentcorePaymentCredentialProviderTagsOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcorePaymentCredentialProviderTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags">BedrockagentcorePaymentCredentialProviderTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcorePaymentCredentialProviderTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags">BedrockagentcorePaymentCredentialProviderTags</a>

---



