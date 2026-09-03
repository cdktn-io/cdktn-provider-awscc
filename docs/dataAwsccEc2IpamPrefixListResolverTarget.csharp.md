# `dataAwsccEc2IpamPrefixListResolverTarget` Submodule <a name="`dataAwsccEc2IpamPrefixListResolverTarget` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2IpamPrefixListResolverTarget <a name="DataAwsccEc2IpamPrefixListResolverTarget" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ec2_ipam_prefix_list_resolver_target awscc_ec2_ipam_prefix_list_resolver_target}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2IpamPrefixListResolverTarget(Construct Scope, string Id, DataAwsccEc2IpamPrefixListResolverTargetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetConfig">DataAwsccEc2IpamPrefixListResolverTargetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetConfig">DataAwsccEc2IpamPrefixListResolverTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2IpamPrefixListResolverTarget resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2IpamPrefixListResolverTarget.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2IpamPrefixListResolverTarget.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2IpamPrefixListResolverTarget.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2IpamPrefixListResolverTarget.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccEc2IpamPrefixListResolverTarget resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2IpamPrefixListResolverTarget to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2IpamPrefixListResolverTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ec2_ipam_prefix_list_resolver_target#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2IpamPrefixListResolverTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.desiredVersion">DesiredVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.ipamPrefixListResolverId">IpamPrefixListResolverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.ipamPrefixListResolverTargetArn">IpamPrefixListResolverTargetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.ipamPrefixListResolverTargetId">IpamPrefixListResolverTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.prefixListId">PrefixListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.prefixListRegion">PrefixListRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsList">DataAwsccEc2IpamPrefixListResolverTargetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.trackLatestVersion">TrackLatestVersion</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `DesiredVersion`<sup>Required</sup> <a name="DesiredVersion" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.desiredVersion"></a>

```csharp
public double DesiredVersion { get; }
```

- *Type:* double

---

##### `IpamPrefixListResolverId`<sup>Required</sup> <a name="IpamPrefixListResolverId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.ipamPrefixListResolverId"></a>

```csharp
public string IpamPrefixListResolverId { get; }
```

- *Type:* string

---

##### `IpamPrefixListResolverTargetArn`<sup>Required</sup> <a name="IpamPrefixListResolverTargetArn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.ipamPrefixListResolverTargetArn"></a>

```csharp
public string IpamPrefixListResolverTargetArn { get; }
```

- *Type:* string

---

##### `IpamPrefixListResolverTargetId`<sup>Required</sup> <a name="IpamPrefixListResolverTargetId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.ipamPrefixListResolverTargetId"></a>

```csharp
public string IpamPrefixListResolverTargetId { get; }
```

- *Type:* string

---

##### `PrefixListId`<sup>Required</sup> <a name="PrefixListId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.prefixListId"></a>

```csharp
public string PrefixListId { get; }
```

- *Type:* string

---

##### `PrefixListRegion`<sup>Required</sup> <a name="PrefixListRegion" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.prefixListRegion"></a>

```csharp
public string PrefixListRegion { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.tags"></a>

```csharp
public DataAwsccEc2IpamPrefixListResolverTargetTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsList">DataAwsccEc2IpamPrefixListResolverTargetTagsList</a>

---

##### `TrackLatestVersion`<sup>Required</sup> <a name="TrackLatestVersion" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.trackLatestVersion"></a>

```csharp
public IResolvable TrackLatestVersion { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTarget.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2IpamPrefixListResolverTargetConfig <a name="DataAwsccEc2IpamPrefixListResolverTargetConfig" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2IpamPrefixListResolverTargetConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ec2_ipam_prefix_list_resolver_target#id DataAwsccEc2IpamPrefixListResolverTarget#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2IpamPrefixListResolverTargetTags <a name="DataAwsccEc2IpamPrefixListResolverTargetTags" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2IpamPrefixListResolverTargetTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2IpamPrefixListResolverTargetTagsList <a name="DataAwsccEc2IpamPrefixListResolverTargetTagsList" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2IpamPrefixListResolverTargetTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsList.get"></a>

```csharp
private DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference <a name="DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTags">DataAwsccEc2IpamPrefixListResolverTargetTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2IpamPrefixListResolverTargetTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolverTarget.DataAwsccEc2IpamPrefixListResolverTargetTags">DataAwsccEc2IpamPrefixListResolverTargetTags</a>

---



