# `dataAwsccEc2LocalGatewayRouteTableVpcAssociation` Submodule <a name="`dataAwsccEc2LocalGatewayRouteTableVpcAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2LocalGatewayRouteTableVpcAssociation <a name="DataAwsccEc2LocalGatewayRouteTableVpcAssociation" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_local_gateway_route_table_vpc_association awscc_ec2_local_gateway_route_table_vpc_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2LocalGatewayRouteTableVpcAssociation(Construct Scope, string Id, DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig">DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig">DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2LocalGatewayRouteTableVpcAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2LocalGatewayRouteTableVpcAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2LocalGatewayRouteTableVpcAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2LocalGatewayRouteTableVpcAssociation.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2LocalGatewayRouteTableVpcAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccEc2LocalGatewayRouteTableVpcAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2LocalGatewayRouteTableVpcAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2LocalGatewayRouteTableVpcAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_local_gateway_route_table_vpc_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2LocalGatewayRouteTableVpcAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.localGatewayId">LocalGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableId">LocalGatewayRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableVpcAssociationId">LocalGatewayRouteTableVpcAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList">DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `LocalGatewayId`<sup>Required</sup> <a name="LocalGatewayId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.localGatewayId"></a>

```csharp
public string LocalGatewayId { get; }
```

- *Type:* string

---

##### `LocalGatewayRouteTableId`<sup>Required</sup> <a name="LocalGatewayRouteTableId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableId"></a>

```csharp
public string LocalGatewayRouteTableId { get; }
```

- *Type:* string

---

##### `LocalGatewayRouteTableVpcAssociationId`<sup>Required</sup> <a name="LocalGatewayRouteTableVpcAssociationId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableVpcAssociationId"></a>

```csharp
public string LocalGatewayRouteTableVpcAssociationId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.tags"></a>

```csharp
public DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList">DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig <a name="DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_local_gateway_route_table_vpc_association#id DataAwsccEc2LocalGatewayRouteTableVpcAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2LocalGatewayRouteTableVpcAssociationTags <a name="DataAwsccEc2LocalGatewayRouteTableVpcAssociationTags" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2LocalGatewayRouteTableVpcAssociationTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList <a name="DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.get"></a>

```csharp
private DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference <a name="DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTags">DataAwsccEc2LocalGatewayRouteTableVpcAssociationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2LocalGatewayRouteTableVpcAssociationTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTags">DataAwsccEc2LocalGatewayRouteTableVpcAssociationTags</a>

---



