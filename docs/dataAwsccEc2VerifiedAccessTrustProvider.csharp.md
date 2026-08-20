# `dataAwsccEc2VerifiedAccessTrustProvider` Submodule <a name="`dataAwsccEc2VerifiedAccessTrustProvider` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2VerifiedAccessTrustProvider <a name="DataAwsccEc2VerifiedAccessTrustProvider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_verified_access_trust_provider awscc_ec2_verified_access_trust_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessTrustProvider(Construct Scope, string Id, DataAwsccEc2VerifiedAccessTrustProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig">DataAwsccEc2VerifiedAccessTrustProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig">DataAwsccEc2VerifiedAccessTrustProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2VerifiedAccessTrustProvider resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2VerifiedAccessTrustProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2VerifiedAccessTrustProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2VerifiedAccessTrustProvider.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2VerifiedAccessTrustProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccEc2VerifiedAccessTrustProvider resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2VerifiedAccessTrustProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2VerifiedAccessTrustProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_verified_access_trust_provider#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2VerifiedAccessTrustProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.deviceOptions">DeviceOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference">DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.deviceTrustProviderType">DeviceTrustProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.nativeApplicationOidcOptions">NativeApplicationOidcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference">DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.oidcOptions">OidcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference">DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.policyReferenceName">PolicyReferenceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.sseSpecification">SseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference">DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList">DataAwsccEc2VerifiedAccessTrustProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.trustProviderType">TrustProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.userTrustProviderType">UserTrustProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.verifiedAccessTrustProviderId">VerifiedAccessTrustProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DeviceOptions`<sup>Required</sup> <a name="DeviceOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.deviceOptions"></a>

```csharp
public DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference DeviceOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference">DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference</a>

---

##### `DeviceTrustProviderType`<sup>Required</sup> <a name="DeviceTrustProviderType" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.deviceTrustProviderType"></a>

```csharp
public string DeviceTrustProviderType { get; }
```

- *Type:* string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; }
```

- *Type:* string

---

##### `NativeApplicationOidcOptions`<sup>Required</sup> <a name="NativeApplicationOidcOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.nativeApplicationOidcOptions"></a>

```csharp
public DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference NativeApplicationOidcOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference">DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference</a>

---

##### `OidcOptions`<sup>Required</sup> <a name="OidcOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.oidcOptions"></a>

```csharp
public DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference OidcOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference">DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference</a>

---

##### `PolicyReferenceName`<sup>Required</sup> <a name="PolicyReferenceName" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.policyReferenceName"></a>

```csharp
public string PolicyReferenceName { get; }
```

- *Type:* string

---

##### `SseSpecification`<sup>Required</sup> <a name="SseSpecification" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.sseSpecification"></a>

```csharp
public DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference SseSpecification { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference">DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.tags"></a>

```csharp
public DataAwsccEc2VerifiedAccessTrustProviderTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList">DataAwsccEc2VerifiedAccessTrustProviderTagsList</a>

---

##### `TrustProviderType`<sup>Required</sup> <a name="TrustProviderType" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.trustProviderType"></a>

```csharp
public string TrustProviderType { get; }
```

- *Type:* string

---

##### `UserTrustProviderType`<sup>Required</sup> <a name="UserTrustProviderType" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.userTrustProviderType"></a>

```csharp
public string UserTrustProviderType { get; }
```

- *Type:* string

---

##### `VerifiedAccessTrustProviderId`<sup>Required</sup> <a name="VerifiedAccessTrustProviderId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.verifiedAccessTrustProviderId"></a>

```csharp
public string VerifiedAccessTrustProviderId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2VerifiedAccessTrustProviderConfig <a name="DataAwsccEc2VerifiedAccessTrustProviderConfig" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessTrustProviderConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_verified_access_trust_provider#id DataAwsccEc2VerifiedAccessTrustProvider#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2VerifiedAccessTrustProviderDeviceOptions <a name="DataAwsccEc2VerifiedAccessTrustProviderDeviceOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessTrustProviderDeviceOptions {

};
```


### DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptions <a name="DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptions {

};
```


### DataAwsccEc2VerifiedAccessTrustProviderOidcOptions <a name="DataAwsccEc2VerifiedAccessTrustProviderOidcOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessTrustProviderOidcOptions {

};
```


### DataAwsccEc2VerifiedAccessTrustProviderSseSpecification <a name="DataAwsccEc2VerifiedAccessTrustProviderSseSpecification" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessTrustProviderSseSpecification {

};
```


### DataAwsccEc2VerifiedAccessTrustProviderTags <a name="DataAwsccEc2VerifiedAccessTrustProviderTags" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessTrustProviderTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference <a name="DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.publicSigningKeyUrl">PublicSigningKeyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptions">DataAwsccEc2VerifiedAccessTrustProviderDeviceOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublicSigningKeyUrl`<sup>Required</sup> <a name="PublicSigningKeyUrl" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.publicSigningKeyUrl"></a>

```csharp
public string PublicSigningKeyUrl { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2VerifiedAccessTrustProviderDeviceOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptions">DataAwsccEc2VerifiedAccessTrustProviderDeviceOptions</a>

---


### DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference <a name="DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.publicSigningKeyEndpoint">PublicSigningKeyEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.userInfoEndpoint">UserInfoEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptions">DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.authorizationEndpoint"></a>

```csharp
public string AuthorizationEndpoint { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `PublicSigningKeyEndpoint`<sup>Required</sup> <a name="PublicSigningKeyEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.publicSigningKeyEndpoint"></a>

```csharp
public string PublicSigningKeyEndpoint { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; }
```

- *Type:* string

---

##### `UserInfoEndpoint`<sup>Required</sup> <a name="UserInfoEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.userInfoEndpoint"></a>

```csharp
public string UserInfoEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptions">DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptions</a>

---


### DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference <a name="DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpoint">UserInfoEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptions">DataAwsccEc2VerifiedAccessTrustProviderOidcOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpoint"></a>

```csharp
public string AuthorizationEndpoint { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; }
```

- *Type:* string

---

##### `UserInfoEndpoint`<sup>Required</sup> <a name="UserInfoEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpoint"></a>

```csharp
public string UserInfoEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2VerifiedAccessTrustProviderOidcOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptions">DataAwsccEc2VerifiedAccessTrustProviderOidcOptions</a>

---


### DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference <a name="DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.customerManagedKeyEnabled">CustomerManagedKeyEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecification">DataAwsccEc2VerifiedAccessTrustProviderSseSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomerManagedKeyEnabled`<sup>Required</sup> <a name="CustomerManagedKeyEnabled" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.customerManagedKeyEnabled"></a>

```csharp
public IResolvable CustomerManagedKeyEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2VerifiedAccessTrustProviderSseSpecification InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecification">DataAwsccEc2VerifiedAccessTrustProviderSseSpecification</a>

---


### DataAwsccEc2VerifiedAccessTrustProviderTagsList <a name="DataAwsccEc2VerifiedAccessTrustProviderTagsList" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessTrustProviderTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.get"></a>

```csharp
private DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference <a name="DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTags">DataAwsccEc2VerifiedAccessTrustProviderTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2VerifiedAccessTrustProviderTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTags">DataAwsccEc2VerifiedAccessTrustProviderTags</a>

---



