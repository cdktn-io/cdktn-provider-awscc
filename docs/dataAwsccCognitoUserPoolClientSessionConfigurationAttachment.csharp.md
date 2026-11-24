# `dataAwsccCognitoUserPoolClientSessionConfigurationAttachment` Submodule <a name="`dataAwsccCognitoUserPoolClientSessionConfigurationAttachment` Submodule" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCognitoUserPoolClientSessionConfigurationAttachment <a name="DataAwsccCognitoUserPoolClientSessionConfigurationAttachment" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/cognito_user_pool_client_session_configuration_attachment awscc_cognito_user_pool_client_session_configuration_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCognitoUserPoolClientSessionConfigurationAttachment(Construct Scope, string Id, DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig">DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig">DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCognitoUserPoolClientSessionConfigurationAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccCognitoUserPoolClientSessionConfigurationAttachment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCognitoUserPoolClientSessionConfigurationAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCognitoUserPoolClientSessionConfigurationAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/cognito_user_pool_client_session_configuration_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCognitoUserPoolClientSessionConfigurationAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.ssoSession">SsoSession</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference">DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.userPoolId">UserPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `SsoSession`<sup>Required</sup> <a name="SsoSession" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.ssoSession"></a>

```csharp
public DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference SsoSession { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference">DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference</a>

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.userPoolId"></a>

```csharp
public string UserPoolId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig <a name="DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/cognito_user_pool_client_session_configuration_attachment#id DataAwsccCognitoUserPoolClientSessionConfigurationAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSession <a name="DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSession" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSession"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSession.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSession {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference <a name="DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.maxValidityMinutes">MaxValidityMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSession">DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSession</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxValidityMinutes`<sup>Required</sup> <a name="MaxValidityMinutes" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.maxValidityMinutes"></a>

```csharp
public double MaxValidityMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSession InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSession">DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSession</a>

---



