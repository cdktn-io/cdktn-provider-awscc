# `dataAwsccEc2IpamExternalResourceVerificationToken` Submodule <a name="`dataAwsccEc2IpamExternalResourceVerificationToken` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2IpamExternalResourceVerificationToken <a name="DataAwsccEc2IpamExternalResourceVerificationToken" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ec2_ipam_external_resource_verification_token awscc_ec2_ipam_external_resource_verification_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2IpamExternalResourceVerificationToken(Construct Scope, string Id, DataAwsccEc2IpamExternalResourceVerificationTokenConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig">DataAwsccEc2IpamExternalResourceVerificationTokenConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig">DataAwsccEc2IpamExternalResourceVerificationTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2IpamExternalResourceVerificationToken resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2IpamExternalResourceVerificationToken.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2IpamExternalResourceVerificationToken.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2IpamExternalResourceVerificationToken.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2IpamExternalResourceVerificationToken.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccEc2IpamExternalResourceVerificationToken resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2IpamExternalResourceVerificationToken to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2IpamExternalResourceVerificationToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ec2_ipam_external_resource_verification_token#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2IpamExternalResourceVerificationToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.ipamArn">IpamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.ipamExternalResourceVerificationTokenArn">IpamExternalResourceVerificationTokenArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.ipamExternalResourceVerificationTokenId">IpamExternalResourceVerificationTokenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.ipamId">IpamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.ipamRegion">IpamRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.notAfter">NotAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList">DataAwsccEc2IpamExternalResourceVerificationTokenTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.tokenName">TokenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.tokenValue">TokenValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `IpamArn`<sup>Required</sup> <a name="IpamArn" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.ipamArn"></a>

```csharp
public string IpamArn { get; }
```

- *Type:* string

---

##### `IpamExternalResourceVerificationTokenArn`<sup>Required</sup> <a name="IpamExternalResourceVerificationTokenArn" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.ipamExternalResourceVerificationTokenArn"></a>

```csharp
public string IpamExternalResourceVerificationTokenArn { get; }
```

- *Type:* string

---

##### `IpamExternalResourceVerificationTokenId`<sup>Required</sup> <a name="IpamExternalResourceVerificationTokenId" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.ipamExternalResourceVerificationTokenId"></a>

```csharp
public string IpamExternalResourceVerificationTokenId { get; }
```

- *Type:* string

---

##### `IpamId`<sup>Required</sup> <a name="IpamId" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.ipamId"></a>

```csharp
public string IpamId { get; }
```

- *Type:* string

---

##### `IpamRegion`<sup>Required</sup> <a name="IpamRegion" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.ipamRegion"></a>

```csharp
public string IpamRegion { get; }
```

- *Type:* string

---

##### `NotAfter`<sup>Required</sup> <a name="NotAfter" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.notAfter"></a>

```csharp
public string NotAfter { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.tags"></a>

```csharp
public DataAwsccEc2IpamExternalResourceVerificationTokenTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList">DataAwsccEc2IpamExternalResourceVerificationTokenTagsList</a>

---

##### `TokenName`<sup>Required</sup> <a name="TokenName" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.tokenName"></a>

```csharp
public string TokenName { get; }
```

- *Type:* string

---

##### `TokenValue`<sup>Required</sup> <a name="TokenValue" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.tokenValue"></a>

```csharp
public string TokenValue { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2IpamExternalResourceVerificationTokenConfig <a name="DataAwsccEc2IpamExternalResourceVerificationTokenConfig" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2IpamExternalResourceVerificationTokenConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ec2_ipam_external_resource_verification_token#id DataAwsccEc2IpamExternalResourceVerificationToken#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2IpamExternalResourceVerificationTokenTags <a name="DataAwsccEc2IpamExternalResourceVerificationTokenTags" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2IpamExternalResourceVerificationTokenTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2IpamExternalResourceVerificationTokenTagsList <a name="DataAwsccEc2IpamExternalResourceVerificationTokenTagsList" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2IpamExternalResourceVerificationTokenTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.get"></a>

```csharp
private DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference <a name="DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTags">DataAwsccEc2IpamExternalResourceVerificationTokenTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2IpamExternalResourceVerificationTokenTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTags">DataAwsccEc2IpamExternalResourceVerificationTokenTags</a>

---



