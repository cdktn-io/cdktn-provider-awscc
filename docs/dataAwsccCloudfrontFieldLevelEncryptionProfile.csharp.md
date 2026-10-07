# `dataAwsccCloudfrontFieldLevelEncryptionProfile` Submodule <a name="`dataAwsccCloudfrontFieldLevelEncryptionProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudfrontFieldLevelEncryptionProfile <a name="DataAwsccCloudfrontFieldLevelEncryptionProfile" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/cloudfront_field_level_encryption_profile awscc_cloudfront_field_level_encryption_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudfrontFieldLevelEncryptionProfile(Construct Scope, string Id, DataAwsccCloudfrontFieldLevelEncryptionProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig">DataAwsccCloudfrontFieldLevelEncryptionProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig">DataAwsccCloudfrontFieldLevelEncryptionProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudfrontFieldLevelEncryptionProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCloudfrontFieldLevelEncryptionProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCloudfrontFieldLevelEncryptionProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCloudfrontFieldLevelEncryptionProfile.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCloudfrontFieldLevelEncryptionProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccCloudfrontFieldLevelEncryptionProfile resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCloudfrontFieldLevelEncryptionProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCloudfrontFieldLevelEncryptionProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/cloudfront_field_level_encryption_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudfrontFieldLevelEncryptionProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.fieldLevelEncryptionProfileConfig">FieldLevelEncryptionProfileConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference">DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.fieldLevelEncryptionProfileId">FieldLevelEncryptionProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.lastModifiedTime">LastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `FieldLevelEncryptionProfileConfig`<sup>Required</sup> <a name="FieldLevelEncryptionProfileConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.fieldLevelEncryptionProfileConfig"></a>

```csharp
public DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference FieldLevelEncryptionProfileConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference">DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference</a>

---

##### `FieldLevelEncryptionProfileId`<sup>Required</sup> <a name="FieldLevelEncryptionProfileId" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.fieldLevelEncryptionProfileId"></a>

```csharp
public string FieldLevelEncryptionProfileId { get; }
```

- *Type:* string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.lastModifiedTime"></a>

```csharp
public string LastModifiedTime { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudfrontFieldLevelEncryptionProfileConfig <a name="DataAwsccCloudfrontFieldLevelEncryptionProfileConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudfrontFieldLevelEncryptionProfileConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/cloudfront_field_level_encryption_profile#id DataAwsccCloudfrontFieldLevelEncryptionProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig <a name="DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig {

};
```


### DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities <a name="DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList <a name="DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.get"></a>

```csharp
private DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference <a name="DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.fieldPatterns">FieldPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.providerId">ProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.publicKeyId">PublicKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldPatterns`<sup>Required</sup> <a name="FieldPatterns" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.fieldPatterns"></a>

```csharp
public string[] FieldPatterns { get; }
```

- *Type:* string[]

---

##### `ProviderId`<sup>Required</sup> <a name="ProviderId" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.providerId"></a>

```csharp
public string ProviderId { get; }
```

- *Type:* string

---

##### `PublicKeyId`<sup>Required</sup> <a name="PublicKeyId" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.publicKeyId"></a>

```csharp
public string PublicKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a>

---


### DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference <a name="DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.callerReference">CallerReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.encryptionEntities">EncryptionEntities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList">DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig">DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CallerReference`<sup>Required</sup> <a name="CallerReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.callerReference"></a>

```csharp
public string CallerReference { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `EncryptionEntities`<sup>Required</sup> <a name="EncryptionEntities" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.encryptionEntities"></a>

```csharp
public DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList EncryptionEntities { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList">DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig">DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig</a>

---



