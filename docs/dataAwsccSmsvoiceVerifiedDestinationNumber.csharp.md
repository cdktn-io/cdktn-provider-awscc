# `dataAwsccSmsvoiceVerifiedDestinationNumber` Submodule <a name="`dataAwsccSmsvoiceVerifiedDestinationNumber` Submodule" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSmsvoiceVerifiedDestinationNumber <a name="DataAwsccSmsvoiceVerifiedDestinationNumber" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/smsvoice_verified_destination_number awscc_smsvoice_verified_destination_number}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSmsvoiceVerifiedDestinationNumber(Construct Scope, string Id, DataAwsccSmsvoiceVerifiedDestinationNumberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig">DataAwsccSmsvoiceVerifiedDestinationNumberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig">DataAwsccSmsvoiceVerifiedDestinationNumberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSmsvoiceVerifiedDestinationNumber resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSmsvoiceVerifiedDestinationNumber.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSmsvoiceVerifiedDestinationNumber.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSmsvoiceVerifiedDestinationNumber.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSmsvoiceVerifiedDestinationNumber.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccSmsvoiceVerifiedDestinationNumber resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSmsvoiceVerifiedDestinationNumber to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSmsvoiceVerifiedDestinationNumber that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/smsvoice_verified_destination_number#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSmsvoiceVerifiedDestinationNumber to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.createdTimestamp">CreatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.destinationPhoneNumber">DestinationPhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList">DataAwsccSmsvoiceVerifiedDestinationNumberTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.verifiedDestinationNumberArn">VerifiedDestinationNumberArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.verifiedDestinationNumberId">VerifiedDestinationNumberId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.createdTimestamp"></a>

```csharp
public string CreatedTimestamp { get; }
```

- *Type:* string

---

##### `DestinationPhoneNumber`<sup>Required</sup> <a name="DestinationPhoneNumber" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.destinationPhoneNumber"></a>

```csharp
public string DestinationPhoneNumber { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.tags"></a>

```csharp
public DataAwsccSmsvoiceVerifiedDestinationNumberTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList">DataAwsccSmsvoiceVerifiedDestinationNumberTagsList</a>

---

##### `VerifiedDestinationNumberArn`<sup>Required</sup> <a name="VerifiedDestinationNumberArn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.verifiedDestinationNumberArn"></a>

```csharp
public string VerifiedDestinationNumberArn { get; }
```

- *Type:* string

---

##### `VerifiedDestinationNumberId`<sup>Required</sup> <a name="VerifiedDestinationNumberId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.verifiedDestinationNumberId"></a>

```csharp
public string VerifiedDestinationNumberId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSmsvoiceVerifiedDestinationNumberConfig <a name="DataAwsccSmsvoiceVerifiedDestinationNumberConfig" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSmsvoiceVerifiedDestinationNumberConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/smsvoice_verified_destination_number#id DataAwsccSmsvoiceVerifiedDestinationNumber#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSmsvoiceVerifiedDestinationNumberTags <a name="DataAwsccSmsvoiceVerifiedDestinationNumberTags" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSmsvoiceVerifiedDestinationNumberTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSmsvoiceVerifiedDestinationNumberTagsList <a name="DataAwsccSmsvoiceVerifiedDestinationNumberTagsList" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSmsvoiceVerifiedDestinationNumberTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.get"></a>

```csharp
private DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference <a name="DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTags">DataAwsccSmsvoiceVerifiedDestinationNumberTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSmsvoiceVerifiedDestinationNumberTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTags">DataAwsccSmsvoiceVerifiedDestinationNumberTags</a>

---



