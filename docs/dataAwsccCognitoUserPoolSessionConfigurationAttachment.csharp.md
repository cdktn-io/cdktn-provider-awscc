# `dataAwsccCognitoUserPoolSessionConfigurationAttachment` Submodule <a name="`dataAwsccCognitoUserPoolSessionConfigurationAttachment` Submodule" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCognitoUserPoolSessionConfigurationAttachment <a name="DataAwsccCognitoUserPoolSessionConfigurationAttachment" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/cognito_user_pool_session_configuration_attachment awscc_cognito_user_pool_session_configuration_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCognitoUserPoolSessionConfigurationAttachment(Construct Scope, string Id, DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig">DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig">DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCognitoUserPoolSessionConfigurationAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCognitoUserPoolSessionConfigurationAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCognitoUserPoolSessionConfigurationAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCognitoUserPoolSessionConfigurationAttachment.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCognitoUserPoolSessionConfigurationAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccCognitoUserPoolSessionConfigurationAttachment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCognitoUserPoolSessionConfigurationAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCognitoUserPoolSessionConfigurationAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/cognito_user_pool_session_configuration_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCognitoUserPoolSessionConfigurationAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.tokenSession">TokenSession</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference">DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.userPoolId">UserPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.userSessionTracking">UserSessionTracking</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `TokenSession`<sup>Required</sup> <a name="TokenSession" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.tokenSession"></a>

```csharp
public DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference TokenSession { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference">DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference</a>

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.userPoolId"></a>

```csharp
public string UserPoolId { get; }
```

- *Type:* string

---

##### `UserSessionTracking`<sup>Required</sup> <a name="UserSessionTracking" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.userSessionTracking"></a>

```csharp
public string UserSessionTracking { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig <a name="DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/cognito_user_pool_session_configuration_attachment#id DataAwsccCognitoUserPoolSessionConfigurationAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSession <a name="DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSession" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSession"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSession.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSession {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference <a name="DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.maxPerUser">MaxPerUser</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSession">DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSession</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxPerUser`<sup>Required</sup> <a name="MaxPerUser" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.maxPerUser"></a>

```csharp
public double MaxPerUser { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSession InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSession">DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSession</a>

---



