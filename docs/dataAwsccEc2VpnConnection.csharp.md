# `dataAwsccEc2VpnConnection` Submodule <a name="`dataAwsccEc2VpnConnection` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2VpnConnection <a name="DataAwsccEc2VpnConnection" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_vpn_connection awscc_ec2_vpn_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnection(Construct Scope, string Id, DataAwsccEc2VpnConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig">DataAwsccEc2VpnConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig">DataAwsccEc2VpnConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2VpnConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2VpnConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2VpnConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2VpnConnection.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2VpnConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccEc2VpnConnection resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2VpnConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2VpnConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_vpn_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2VpnConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.customerGatewayId">CustomerGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.enableAcceleration">EnableAcceleration</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.localIpv4NetworkCidr">LocalIpv4NetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.localIpv6NetworkCidr">LocalIpv6NetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.outsideIpAddressType">OutsideIpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.preSharedKeyStorage">PreSharedKeyStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.remoteIpv4NetworkCidr">RemoteIpv4NetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.remoteIpv6NetworkCidr">RemoteIpv6NetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.staticRoutesOnly">StaticRoutesOnly</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList">DataAwsccEc2VpnConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.transportTransitGatewayAttachmentId">TransportTransitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.tunnelBandwidth">TunnelBandwidth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.tunnelInsideIpVersion">TunnelInsideIpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.vpnConcentratorId">VpnConcentratorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.vpnConnectionId">VpnConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.vpnGatewayId">VpnGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.vpnTunnelOptionsSpecifications">VpnTunnelOptionsSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CustomerGatewayId`<sup>Required</sup> <a name="CustomerGatewayId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.customerGatewayId"></a>

```csharp
public string CustomerGatewayId { get; }
```

- *Type:* string

---

##### `EnableAcceleration`<sup>Required</sup> <a name="EnableAcceleration" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.enableAcceleration"></a>

```csharp
public IResolvable EnableAcceleration { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LocalIpv4NetworkCidr`<sup>Required</sup> <a name="LocalIpv4NetworkCidr" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.localIpv4NetworkCidr"></a>

```csharp
public string LocalIpv4NetworkCidr { get; }
```

- *Type:* string

---

##### `LocalIpv6NetworkCidr`<sup>Required</sup> <a name="LocalIpv6NetworkCidr" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.localIpv6NetworkCidr"></a>

```csharp
public string LocalIpv6NetworkCidr { get; }
```

- *Type:* string

---

##### `OutsideIpAddressType`<sup>Required</sup> <a name="OutsideIpAddressType" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.outsideIpAddressType"></a>

```csharp
public string OutsideIpAddressType { get; }
```

- *Type:* string

---

##### `PreSharedKeyStorage`<sup>Required</sup> <a name="PreSharedKeyStorage" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.preSharedKeyStorage"></a>

```csharp
public string PreSharedKeyStorage { get; }
```

- *Type:* string

---

##### `RemoteIpv4NetworkCidr`<sup>Required</sup> <a name="RemoteIpv4NetworkCidr" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.remoteIpv4NetworkCidr"></a>

```csharp
public string RemoteIpv4NetworkCidr { get; }
```

- *Type:* string

---

##### `RemoteIpv6NetworkCidr`<sup>Required</sup> <a name="RemoteIpv6NetworkCidr" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.remoteIpv6NetworkCidr"></a>

```csharp
public string RemoteIpv6NetworkCidr { get; }
```

- *Type:* string

---

##### `StaticRoutesOnly`<sup>Required</sup> <a name="StaticRoutesOnly" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.staticRoutesOnly"></a>

```csharp
public IResolvable StaticRoutesOnly { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.tags"></a>

```csharp
public DataAwsccEc2VpnConnectionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList">DataAwsccEc2VpnConnectionTagsList</a>

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; }
```

- *Type:* string

---

##### `TransportTransitGatewayAttachmentId`<sup>Required</sup> <a name="TransportTransitGatewayAttachmentId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.transportTransitGatewayAttachmentId"></a>

```csharp
public string TransportTransitGatewayAttachmentId { get; }
```

- *Type:* string

---

##### `TunnelBandwidth`<sup>Required</sup> <a name="TunnelBandwidth" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.tunnelBandwidth"></a>

```csharp
public string TunnelBandwidth { get; }
```

- *Type:* string

---

##### `TunnelInsideIpVersion`<sup>Required</sup> <a name="TunnelInsideIpVersion" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.tunnelInsideIpVersion"></a>

```csharp
public string TunnelInsideIpVersion { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VpnConcentratorId`<sup>Required</sup> <a name="VpnConcentratorId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.vpnConcentratorId"></a>

```csharp
public string VpnConcentratorId { get; }
```

- *Type:* string

---

##### `VpnConnectionId`<sup>Required</sup> <a name="VpnConnectionId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.vpnConnectionId"></a>

```csharp
public string VpnConnectionId { get; }
```

- *Type:* string

---

##### `VpnGatewayId`<sup>Required</sup> <a name="VpnGatewayId" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.vpnGatewayId"></a>

```csharp
public string VpnGatewayId { get; }
```

- *Type:* string

---

##### `VpnTunnelOptionsSpecifications`<sup>Required</sup> <a name="VpnTunnelOptionsSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.vpnTunnelOptionsSpecifications"></a>

```csharp
public DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList VpnTunnelOptionsSpecifications { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2VpnConnectionConfig <a name="DataAwsccEc2VpnConnectionConfig" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_vpn_connection#id DataAwsccEc2VpnConnection#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2VpnConnectionTags <a name="DataAwsccEc2VpnConnectionTags" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionTags {

};
```


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecifications <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecifications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecifications {

};
```


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions {

};
```


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions {

};
```


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions {

};
```


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers {

};
```


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms {

};
```


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms {

};
```


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers {

};
```


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms {

};
```


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2VpnConnectionTagsList <a name="DataAwsccEc2VpnConnectionTagsList" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.get"></a>

```csharp
private DataAwsccEc2VpnConnectionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2VpnConnectionTagsOutputReference <a name="DataAwsccEc2VpnConnectionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTags">DataAwsccEc2VpnConnectionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2VpnConnectionTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionTags">DataAwsccEc2VpnConnectionTags</a>

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.get"></a>

```csharp
private DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a>

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.get"></a>

```csharp
private DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogEnabled">BgpLogEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogGroupArn">BgpLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogOutputFormat">BgpLogOutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled">LogEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn">LogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat">LogOutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BgpLogEnabled`<sup>Required</sup> <a name="BgpLogEnabled" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogEnabled"></a>

```csharp
public IResolvable BgpLogEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `BgpLogGroupArn`<sup>Required</sup> <a name="BgpLogGroupArn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogGroupArn"></a>

```csharp
public string BgpLogGroupArn { get; }
```

- *Type:* string

---

##### `BgpLogOutputFormat`<sup>Required</sup> <a name="BgpLogOutputFormat" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogOutputFormat"></a>

```csharp
public string BgpLogOutputFormat { get; }
```

- *Type:* string

---

##### `LogEnabled`<sup>Required</sup> <a name="LogEnabled" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled"></a>

```csharp
public IResolvable LogEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn"></a>

```csharp
public string LogGroupArn { get; }
```

- *Type:* string

---

##### `LogOutputFormat`<sup>Required</sup> <a name="LogOutputFormat" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat"></a>

```csharp
public string LogOutputFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions</a>

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.cloudwatchLogOptions">CloudwatchLogOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogOptions`<sup>Required</sup> <a name="CloudwatchLogOptions" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.cloudwatchLogOptions"></a>

```csharp
public DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference CloudwatchLogOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions</a>

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutAction">DpdTimeoutAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutSeconds">DpdTimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.enableTunnelLifecycleControl">EnableTunnelLifecycleControl</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.ikeVersions">IkeVersions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.logOptions">LogOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1DhGroupNumbers">Phase1DhGroupNumbers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1EncryptionAlgorithms">Phase1EncryptionAlgorithms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1IntegrityAlgorithms">Phase1IntegrityAlgorithms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1LifetimeSeconds">Phase1LifetimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2DhGroupNumbers">Phase2DhGroupNumbers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2EncryptionAlgorithms">Phase2EncryptionAlgorithms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2IntegrityAlgorithms">Phase2IntegrityAlgorithms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2LifetimeSeconds">Phase2LifetimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.preSharedKey">PreSharedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyFuzzPercentage">RekeyFuzzPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyMarginTimeSeconds">RekeyMarginTimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.replayWindowSize">ReplayWindowSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.startupAction">StartupAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideCidr">TunnelInsideCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideIpv6Cidr">TunnelInsideIpv6Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecifications">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DpdTimeoutAction`<sup>Required</sup> <a name="DpdTimeoutAction" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutAction"></a>

```csharp
public string DpdTimeoutAction { get; }
```

- *Type:* string

---

##### `DpdTimeoutSeconds`<sup>Required</sup> <a name="DpdTimeoutSeconds" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutSeconds"></a>

```csharp
public double DpdTimeoutSeconds { get; }
```

- *Type:* double

---

##### `EnableTunnelLifecycleControl`<sup>Required</sup> <a name="EnableTunnelLifecycleControl" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.enableTunnelLifecycleControl"></a>

```csharp
public IResolvable EnableTunnelLifecycleControl { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IkeVersions`<sup>Required</sup> <a name="IkeVersions" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.ikeVersions"></a>

```csharp
public DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList IkeVersions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList</a>

---

##### `LogOptions`<sup>Required</sup> <a name="LogOptions" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.logOptions"></a>

```csharp
public DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference LogOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference</a>

---

##### `Phase1DhGroupNumbers`<sup>Required</sup> <a name="Phase1DhGroupNumbers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1DhGroupNumbers"></a>

```csharp
public DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList Phase1DhGroupNumbers { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList</a>

---

##### `Phase1EncryptionAlgorithms`<sup>Required</sup> <a name="Phase1EncryptionAlgorithms" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1EncryptionAlgorithms"></a>

```csharp
public DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList Phase1EncryptionAlgorithms { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList</a>

---

##### `Phase1IntegrityAlgorithms`<sup>Required</sup> <a name="Phase1IntegrityAlgorithms" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1IntegrityAlgorithms"></a>

```csharp
public DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList Phase1IntegrityAlgorithms { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList</a>

---

##### `Phase1LifetimeSeconds`<sup>Required</sup> <a name="Phase1LifetimeSeconds" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1LifetimeSeconds"></a>

```csharp
public double Phase1LifetimeSeconds { get; }
```

- *Type:* double

---

##### `Phase2DhGroupNumbers`<sup>Required</sup> <a name="Phase2DhGroupNumbers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2DhGroupNumbers"></a>

```csharp
public DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList Phase2DhGroupNumbers { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList</a>

---

##### `Phase2EncryptionAlgorithms`<sup>Required</sup> <a name="Phase2EncryptionAlgorithms" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2EncryptionAlgorithms"></a>

```csharp
public DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList Phase2EncryptionAlgorithms { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList</a>

---

##### `Phase2IntegrityAlgorithms`<sup>Required</sup> <a name="Phase2IntegrityAlgorithms" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2IntegrityAlgorithms"></a>

```csharp
public DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList Phase2IntegrityAlgorithms { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList</a>

---

##### `Phase2LifetimeSeconds`<sup>Required</sup> <a name="Phase2LifetimeSeconds" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2LifetimeSeconds"></a>

```csharp
public double Phase2LifetimeSeconds { get; }
```

- *Type:* double

---

##### `PreSharedKey`<sup>Required</sup> <a name="PreSharedKey" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.preSharedKey"></a>

```csharp
public string PreSharedKey { get; }
```

- *Type:* string

---

##### `RekeyFuzzPercentage`<sup>Required</sup> <a name="RekeyFuzzPercentage" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyFuzzPercentage"></a>

```csharp
public double RekeyFuzzPercentage { get; }
```

- *Type:* double

---

##### `RekeyMarginTimeSeconds`<sup>Required</sup> <a name="RekeyMarginTimeSeconds" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyMarginTimeSeconds"></a>

```csharp
public double RekeyMarginTimeSeconds { get; }
```

- *Type:* double

---

##### `ReplayWindowSize`<sup>Required</sup> <a name="ReplayWindowSize" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.replayWindowSize"></a>

```csharp
public double ReplayWindowSize { get; }
```

- *Type:* double

---

##### `StartupAction`<sup>Required</sup> <a name="StartupAction" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.startupAction"></a>

```csharp
public string StartupAction { get; }
```

- *Type:* string

---

##### `TunnelInsideCidr`<sup>Required</sup> <a name="TunnelInsideCidr" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideCidr"></a>

```csharp
public string TunnelInsideCidr { get; }
```

- *Type:* string

---

##### `TunnelInsideIpv6Cidr`<sup>Required</sup> <a name="TunnelInsideIpv6Cidr" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideIpv6Cidr"></a>

```csharp
public string TunnelInsideIpv6Cidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecifications InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecifications">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecifications</a>

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.get"></a>

```csharp
private DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a>

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.get"></a>

```csharp
private DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a>

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.get"></a>

```csharp
private DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a>

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.get"></a>

```csharp
private DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a>

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.get"></a>

```csharp
private DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a>

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.get"></a>

```csharp
private DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference <a name="DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpnConnection.DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a>

---



