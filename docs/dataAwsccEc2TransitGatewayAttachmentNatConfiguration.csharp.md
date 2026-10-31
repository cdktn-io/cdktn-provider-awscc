# `dataAwsccEc2TransitGatewayAttachmentNatConfiguration` Submodule <a name="`dataAwsccEc2TransitGatewayAttachmentNatConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2TransitGatewayAttachmentNatConfiguration <a name="DataAwsccEc2TransitGatewayAttachmentNatConfiguration" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/ec2_transit_gateway_attachment_nat_configuration awscc_ec2_transit_gateway_attachment_nat_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2TransitGatewayAttachmentNatConfiguration(Construct Scope, string Id, DataAwsccEc2TransitGatewayAttachmentNatConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationConfig">DataAwsccEc2TransitGatewayAttachmentNatConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationConfig">DataAwsccEc2TransitGatewayAttachmentNatConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2TransitGatewayAttachmentNatConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2TransitGatewayAttachmentNatConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2TransitGatewayAttachmentNatConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2TransitGatewayAttachmentNatConfiguration.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2TransitGatewayAttachmentNatConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccEc2TransitGatewayAttachmentNatConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2TransitGatewayAttachmentNatConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2TransitGatewayAttachmentNatConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/ec2_transit_gateway_attachment_nat_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2TransitGatewayAttachmentNatConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.natGatewayRules">NatGatewayRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList">DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.natGatewaySupport">NatGatewaySupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.natSystemRouteSupport">NatSystemRouteSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `NatGatewayRules`<sup>Required</sup> <a name="NatGatewayRules" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.natGatewayRules"></a>

```csharp
public DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList NatGatewayRules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList">DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList</a>

---

##### `NatGatewaySupport`<sup>Required</sup> <a name="NatGatewaySupport" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.natGatewaySupport"></a>

```csharp
public string NatGatewaySupport { get; }
```

- *Type:* string

---

##### `NatSystemRouteSupport`<sup>Required</sup> <a name="NatSystemRouteSupport" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.natSystemRouteSupport"></a>

```csharp
public string NatSystemRouteSupport { get; }
```

- *Type:* string

---

##### `TransitGatewayAttachmentId`<sup>Required</sup> <a name="TransitGatewayAttachmentId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.transitGatewayAttachmentId"></a>

```csharp
public string TransitGatewayAttachmentId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2TransitGatewayAttachmentNatConfigurationConfig <a name="DataAwsccEc2TransitGatewayAttachmentNatConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2TransitGatewayAttachmentNatConfigurationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/ec2_transit_gateway_attachment_nat_configuration#id DataAwsccEc2TransitGatewayAttachmentNatConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRules <a name="DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRules" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRules {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList <a name="DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.get"></a>

```csharp
private DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference <a name="DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.matchSourceCidr">MatchSourceCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.natCidr">NatCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.ruleNumber">RuleNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRules">DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchSourceCidr`<sup>Required</sup> <a name="MatchSourceCidr" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.matchSourceCidr"></a>

```csharp
public string MatchSourceCidr { get; }
```

- *Type:* string

---

##### `NatCidr`<sup>Required</sup> <a name="NatCidr" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.natCidr"></a>

```csharp
public string NatCidr { get; }
```

- *Type:* string

---

##### `RuleNumber`<sup>Required</sup> <a name="RuleNumber" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.ruleNumber"></a>

```csharp
public double RuleNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRules InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayAttachmentNatConfiguration.DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRules">DataAwsccEc2TransitGatewayAttachmentNatConfigurationNatGatewayRules</a>

---



