# `dataAwsccEc2RouteServerPeer` Submodule <a name="`dataAwsccEc2RouteServerPeer` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2RouteServerPeer <a name="DataAwsccEc2RouteServerPeer" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_route_server_peer awscc_ec2_route_server_peer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2RouteServerPeer(Construct Scope, string Id, DataAwsccEc2RouteServerPeerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerConfig">DataAwsccEc2RouteServerPeerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerConfig">DataAwsccEc2RouteServerPeerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2RouteServerPeer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2RouteServerPeer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2RouteServerPeer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2RouteServerPeer.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2RouteServerPeer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccEc2RouteServerPeer resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2RouteServerPeer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2RouteServerPeer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_route_server_peer#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2RouteServerPeer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.bgpOptions">BgpOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference">DataAwsccEc2RouteServerPeerBgpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.endpointEniAddress">EndpointEniAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.endpointEniId">EndpointEniId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.peerAddress">PeerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.routeServerEndpointId">RouteServerEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.routeServerId">RouteServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.routeServerPeerId">RouteServerPeerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsList">DataAwsccEc2RouteServerPeerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `BgpOptions`<sup>Required</sup> <a name="BgpOptions" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.bgpOptions"></a>

```csharp
public DataAwsccEc2RouteServerPeerBgpOptionsOutputReference BgpOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference">DataAwsccEc2RouteServerPeerBgpOptionsOutputReference</a>

---

##### `EndpointEniAddress`<sup>Required</sup> <a name="EndpointEniAddress" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.endpointEniAddress"></a>

```csharp
public string EndpointEniAddress { get; }
```

- *Type:* string

---

##### `EndpointEniId`<sup>Required</sup> <a name="EndpointEniId" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.endpointEniId"></a>

```csharp
public string EndpointEniId { get; }
```

- *Type:* string

---

##### `PeerAddress`<sup>Required</sup> <a name="PeerAddress" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.peerAddress"></a>

```csharp
public string PeerAddress { get; }
```

- *Type:* string

---

##### `RouteServerEndpointId`<sup>Required</sup> <a name="RouteServerEndpointId" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.routeServerEndpointId"></a>

```csharp
public string RouteServerEndpointId { get; }
```

- *Type:* string

---

##### `RouteServerId`<sup>Required</sup> <a name="RouteServerId" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.routeServerId"></a>

```csharp
public string RouteServerId { get; }
```

- *Type:* string

---

##### `RouteServerPeerId`<sup>Required</sup> <a name="RouteServerPeerId" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.routeServerPeerId"></a>

```csharp
public string RouteServerPeerId { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.tags"></a>

```csharp
public DataAwsccEc2RouteServerPeerTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsList">DataAwsccEc2RouteServerPeerTagsList</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2RouteServerPeerBgpOptions <a name="DataAwsccEc2RouteServerPeerBgpOptions" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2RouteServerPeerBgpOptions {

};
```


### DataAwsccEc2RouteServerPeerConfig <a name="DataAwsccEc2RouteServerPeerConfig" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2RouteServerPeerConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_route_server_peer#id DataAwsccEc2RouteServerPeer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2RouteServerPeerTags <a name="DataAwsccEc2RouteServerPeerTags" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2RouteServerPeerTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2RouteServerPeerBgpOptionsOutputReference <a name="DataAwsccEc2RouteServerPeerBgpOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2RouteServerPeerBgpOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.property.peerAsn">PeerAsn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.property.peerLivenessDetection">PeerLivenessDetection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptions">DataAwsccEc2RouteServerPeerBgpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PeerAsn`<sup>Required</sup> <a name="PeerAsn" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.property.peerAsn"></a>

```csharp
public double PeerAsn { get; }
```

- *Type:* double

---

##### `PeerLivenessDetection`<sup>Required</sup> <a name="PeerLivenessDetection" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.property.peerLivenessDetection"></a>

```csharp
public string PeerLivenessDetection { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2RouteServerPeerBgpOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerBgpOptions">DataAwsccEc2RouteServerPeerBgpOptions</a>

---


### DataAwsccEc2RouteServerPeerTagsList <a name="DataAwsccEc2RouteServerPeerTagsList" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2RouteServerPeerTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsList.get"></a>

```csharp
private DataAwsccEc2RouteServerPeerTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2RouteServerPeerTagsOutputReference <a name="DataAwsccEc2RouteServerPeerTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2RouteServerPeerTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTags">DataAwsccEc2RouteServerPeerTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2RouteServerPeerTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2RouteServerPeer.DataAwsccEc2RouteServerPeerTags">DataAwsccEc2RouteServerPeerTags</a>

---



