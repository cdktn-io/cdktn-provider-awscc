# `dataAwsccDirectconnectDirectConnectGatewayAssociation` Submodule <a name="`dataAwsccDirectconnectDirectConnectGatewayAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDirectconnectDirectConnectGatewayAssociation <a name="DataAwsccDirectconnectDirectConnectGatewayAssociation" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/directconnect_direct_connect_gateway_association awscc_directconnect_direct_connect_gateway_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDirectconnectDirectConnectGatewayAssociation(Construct Scope, string Id, DataAwsccDirectconnectDirectConnectGatewayAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociationConfig">DataAwsccDirectconnectDirectConnectGatewayAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociationConfig">DataAwsccDirectconnectDirectConnectGatewayAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDirectconnectDirectConnectGatewayAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDirectconnectDirectConnectGatewayAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDirectconnectDirectConnectGatewayAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDirectconnectDirectConnectGatewayAssociation.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDirectconnectDirectConnectGatewayAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccDirectconnectDirectConnectGatewayAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDirectconnectDirectConnectGatewayAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDirectconnectDirectConnectGatewayAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/directconnect_direct_connect_gateway_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDirectconnectDirectConnectGatewayAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.acceptDirectConnectGatewayAssociationProposalRoleArn">AcceptDirectConnectGatewayAssociationProposalRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.allowedPrefixesToDirectConnectGateway">AllowedPrefixesToDirectConnectGateway</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.associatedGatewayId">AssociatedGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.associationId">AssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.directConnectGatewayId">DirectConnectGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AcceptDirectConnectGatewayAssociationProposalRoleArn`<sup>Required</sup> <a name="AcceptDirectConnectGatewayAssociationProposalRoleArn" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.acceptDirectConnectGatewayAssociationProposalRoleArn"></a>

```csharp
public string AcceptDirectConnectGatewayAssociationProposalRoleArn { get; }
```

- *Type:* string

---

##### `AllowedPrefixesToDirectConnectGateway`<sup>Required</sup> <a name="AllowedPrefixesToDirectConnectGateway" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.allowedPrefixesToDirectConnectGateway"></a>

```csharp
public string[] AllowedPrefixesToDirectConnectGateway { get; }
```

- *Type:* string[]

---

##### `AssociatedGatewayId`<sup>Required</sup> <a name="AssociatedGatewayId" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.associatedGatewayId"></a>

```csharp
public string AssociatedGatewayId { get; }
```

- *Type:* string

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.associationId"></a>

```csharp
public string AssociationId { get; }
```

- *Type:* string

---

##### `DirectConnectGatewayId`<sup>Required</sup> <a name="DirectConnectGatewayId" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.directConnectGatewayId"></a>

```csharp
public string DirectConnectGatewayId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDirectconnectDirectConnectGatewayAssociationConfig <a name="DataAwsccDirectconnectDirectConnectGatewayAssociationConfig" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDirectconnectDirectConnectGatewayAssociationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDirectconnectDirectConnectGatewayAssociation.DataAwsccDirectconnectDirectConnectGatewayAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/directconnect_direct_connect_gateway_association#id DataAwsccDirectconnectDirectConnectGatewayAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



