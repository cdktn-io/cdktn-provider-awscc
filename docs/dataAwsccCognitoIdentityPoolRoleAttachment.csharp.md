# `dataAwsccCognitoIdentityPoolRoleAttachment` Submodule <a name="`dataAwsccCognitoIdentityPoolRoleAttachment` Submodule" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCognitoIdentityPoolRoleAttachment <a name="DataAwsccCognitoIdentityPoolRoleAttachment" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cognito_identity_pool_role_attachment awscc_cognito_identity_pool_role_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCognitoIdentityPoolRoleAttachment(Construct Scope, string Id, DataAwsccCognitoIdentityPoolRoleAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig">DataAwsccCognitoIdentityPoolRoleAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig">DataAwsccCognitoIdentityPoolRoleAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCognitoIdentityPoolRoleAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCognitoIdentityPoolRoleAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCognitoIdentityPoolRoleAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCognitoIdentityPoolRoleAttachment.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCognitoIdentityPoolRoleAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccCognitoIdentityPoolRoleAttachment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCognitoIdentityPoolRoleAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCognitoIdentityPoolRoleAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cognito_identity_pool_role_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCognitoIdentityPoolRoleAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.identityPoolId">IdentityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.identityPoolRoleAttachmentId">IdentityPoolRoleAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.roleMappings">RoleMappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap">DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.roles">Roles</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `IdentityPoolId`<sup>Required</sup> <a name="IdentityPoolId" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.identityPoolId"></a>

```csharp
public string IdentityPoolId { get; }
```

- *Type:* string

---

##### `IdentityPoolRoleAttachmentId`<sup>Required</sup> <a name="IdentityPoolRoleAttachmentId" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.identityPoolRoleAttachmentId"></a>

```csharp
public string IdentityPoolRoleAttachmentId { get; }
```

- *Type:* string

---

##### `RoleMappings`<sup>Required</sup> <a name="RoleMappings" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.roleMappings"></a>

```csharp
public DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap RoleMappings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap">DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap</a>

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.roles"></a>

```csharp
public StringMap Roles { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCognitoIdentityPoolRoleAttachmentConfig <a name="DataAwsccCognitoIdentityPoolRoleAttachmentConfig" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCognitoIdentityPoolRoleAttachmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cognito_identity_pool_role_attachment#id DataAwsccCognitoIdentityPoolRoleAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappings <a name="DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappings" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappings {

};
```


### DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration <a name="DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration {

};
```


### DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules <a name="DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap <a name="DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.get"></a>

```csharp
private DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference <a name="DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.ambiguousRoleResolution">AmbiguousRoleResolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.identityProvider">IdentityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.rulesConfiguration">RulesConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference">DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappings">DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AmbiguousRoleResolution`<sup>Required</sup> <a name="AmbiguousRoleResolution" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.ambiguousRoleResolution"></a>

```csharp
public string AmbiguousRoleResolution { get; }
```

- *Type:* string

---

##### `IdentityProvider`<sup>Required</sup> <a name="IdentityProvider" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.identityProvider"></a>

```csharp
public string IdentityProvider { get; }
```

- *Type:* string

---

##### `RulesConfiguration`<sup>Required</sup> <a name="RulesConfiguration" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.rulesConfiguration"></a>

```csharp
public DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference RulesConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference">DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappings">DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappings</a>

---


### DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference <a name="DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList">DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration">DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.rules"></a>

```csharp
public DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList Rules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList">DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration">DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration</a>

---


### DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList <a name="DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.get"></a>

```csharp
private DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference <a name="DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.claim">Claim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.matchType">MatchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules">DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Claim`<sup>Required</sup> <a name="Claim" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.claim"></a>

```csharp
public string Claim { get; }
```

- *Type:* string

---

##### `MatchType`<sup>Required</sup> <a name="MatchType" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.matchType"></a>

```csharp
public string MatchType { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules">DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules</a>

---



