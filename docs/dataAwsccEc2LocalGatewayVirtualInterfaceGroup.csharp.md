# `dataAwsccEc2LocalGatewayVirtualInterfaceGroup` Submodule <a name="`dataAwsccEc2LocalGatewayVirtualInterfaceGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2LocalGatewayVirtualInterfaceGroup <a name="DataAwsccEc2LocalGatewayVirtualInterfaceGroup" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_local_gateway_virtual_interface_group awscc_ec2_local_gateway_virtual_interface_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2LocalGatewayVirtualInterfaceGroup(Construct Scope, string Id, DataAwsccEc2LocalGatewayVirtualInterfaceGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupConfig">DataAwsccEc2LocalGatewayVirtualInterfaceGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupConfig">DataAwsccEc2LocalGatewayVirtualInterfaceGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2LocalGatewayVirtualInterfaceGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2LocalGatewayVirtualInterfaceGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2LocalGatewayVirtualInterfaceGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2LocalGatewayVirtualInterfaceGroup.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2LocalGatewayVirtualInterfaceGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccEc2LocalGatewayVirtualInterfaceGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2LocalGatewayVirtualInterfaceGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2LocalGatewayVirtualInterfaceGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_local_gateway_virtual_interface_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2LocalGatewayVirtualInterfaceGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.configurationState">ConfigurationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.localBgpAsn">LocalBgpAsn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.localBgpAsnExtended">LocalBgpAsnExtended</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.localGatewayId">LocalGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.localGatewayVirtualInterfaceGroupArn">LocalGatewayVirtualInterfaceGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.localGatewayVirtualInterfaceGroupId">LocalGatewayVirtualInterfaceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.localGatewayVirtualInterfaceIds">LocalGatewayVirtualInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList">DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ConfigurationState`<sup>Required</sup> <a name="ConfigurationState" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.configurationState"></a>

```csharp
public string ConfigurationState { get; }
```

- *Type:* string

---

##### `LocalBgpAsn`<sup>Required</sup> <a name="LocalBgpAsn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.localBgpAsn"></a>

```csharp
public double LocalBgpAsn { get; }
```

- *Type:* double

---

##### `LocalBgpAsnExtended`<sup>Required</sup> <a name="LocalBgpAsnExtended" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.localBgpAsnExtended"></a>

```csharp
public double LocalBgpAsnExtended { get; }
```

- *Type:* double

---

##### `LocalGatewayId`<sup>Required</sup> <a name="LocalGatewayId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.localGatewayId"></a>

```csharp
public string LocalGatewayId { get; }
```

- *Type:* string

---

##### `LocalGatewayVirtualInterfaceGroupArn`<sup>Required</sup> <a name="LocalGatewayVirtualInterfaceGroupArn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.localGatewayVirtualInterfaceGroupArn"></a>

```csharp
public string LocalGatewayVirtualInterfaceGroupArn { get; }
```

- *Type:* string

---

##### `LocalGatewayVirtualInterfaceGroupId`<sup>Required</sup> <a name="LocalGatewayVirtualInterfaceGroupId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.localGatewayVirtualInterfaceGroupId"></a>

```csharp
public string LocalGatewayVirtualInterfaceGroupId { get; }
```

- *Type:* string

---

##### `LocalGatewayVirtualInterfaceIds`<sup>Required</sup> <a name="LocalGatewayVirtualInterfaceIds" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.localGatewayVirtualInterfaceIds"></a>

```csharp
public string[] LocalGatewayVirtualInterfaceIds { get; }
```

- *Type:* string[]

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.tags"></a>

```csharp
public DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList">DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2LocalGatewayVirtualInterfaceGroupConfig <a name="DataAwsccEc2LocalGatewayVirtualInterfaceGroupConfig" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2LocalGatewayVirtualInterfaceGroupConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_local_gateway_virtual_interface_group#id DataAwsccEc2LocalGatewayVirtualInterfaceGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2LocalGatewayVirtualInterfaceGroupTags <a name="DataAwsccEc2LocalGatewayVirtualInterfaceGroupTags" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2LocalGatewayVirtualInterfaceGroupTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList <a name="DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList.get"></a>

```csharp
private DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference <a name="DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTags">DataAwsccEc2LocalGatewayVirtualInterfaceGroupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2LocalGatewayVirtualInterfaceGroupTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayVirtualInterfaceGroup.DataAwsccEc2LocalGatewayVirtualInterfaceGroupTags">DataAwsccEc2LocalGatewayVirtualInterfaceGroupTags</a>

---



