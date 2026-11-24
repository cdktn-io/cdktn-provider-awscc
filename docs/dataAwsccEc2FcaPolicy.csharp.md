# `dataAwsccEc2FcaPolicy` Submodule <a name="`dataAwsccEc2FcaPolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2FcaPolicy <a name="DataAwsccEc2FcaPolicy" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/ec2_fca_policy awscc_ec2_fca_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2FcaPolicy(Construct Scope, string Id, DataAwsccEc2FcaPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig">DataAwsccEc2FcaPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig">DataAwsccEc2FcaPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2FcaPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2FcaPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2FcaPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2FcaPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2FcaPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccEc2FcaPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2FcaPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2FcaPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/ec2_fca_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2FcaPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.fcaPolicyId">FcaPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.instanceFcaPolicyDocument">InstanceFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference">DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.latestVersion">LatestVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.natFcaPolicyDocument">NatFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference">DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.networkResourceType">NetworkResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.ownerAccount">OwnerAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.pcxFcaPolicyDocument">PcxFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference">DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.policyCreatedAt">PolicyCreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.showBackEnabled">ShowBackEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList">DataAwsccEc2FcaPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.versionExpectedEffectiveAt">VersionExpectedEffectiveAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FcaPolicyId`<sup>Required</sup> <a name="FcaPolicyId" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.fcaPolicyId"></a>

```csharp
public string FcaPolicyId { get; }
```

- *Type:* string

---

##### `InstanceFcaPolicyDocument`<sup>Required</sup> <a name="InstanceFcaPolicyDocument" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.instanceFcaPolicyDocument"></a>

```csharp
public DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference InstanceFcaPolicyDocument { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference">DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference</a>

---

##### `LatestVersion`<sup>Required</sup> <a name="LatestVersion" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.latestVersion"></a>

```csharp
public double LatestVersion { get; }
```

- *Type:* double

---

##### `NatFcaPolicyDocument`<sup>Required</sup> <a name="NatFcaPolicyDocument" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.natFcaPolicyDocument"></a>

```csharp
public DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference NatFcaPolicyDocument { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference">DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference</a>

---

##### `NetworkResourceType`<sup>Required</sup> <a name="NetworkResourceType" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.networkResourceType"></a>

```csharp
public string NetworkResourceType { get; }
```

- *Type:* string

---

##### `OwnerAccount`<sup>Required</sup> <a name="OwnerAccount" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.ownerAccount"></a>

```csharp
public string OwnerAccount { get; }
```

- *Type:* string

---

##### `PcxFcaPolicyDocument`<sup>Required</sup> <a name="PcxFcaPolicyDocument" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.pcxFcaPolicyDocument"></a>

```csharp
public DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference PcxFcaPolicyDocument { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference">DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference</a>

---

##### `PolicyCreatedAt`<sup>Required</sup> <a name="PolicyCreatedAt" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.policyCreatedAt"></a>

```csharp
public string PolicyCreatedAt { get; }
```

- *Type:* string

---

##### `ShowBackEnabled`<sup>Required</sup> <a name="ShowBackEnabled" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.showBackEnabled"></a>

```csharp
public IResolvable ShowBackEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.tags"></a>

```csharp
public DataAwsccEc2FcaPolicyTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList">DataAwsccEc2FcaPolicyTagsList</a>

---

##### `VersionExpectedEffectiveAt`<sup>Required</sup> <a name="VersionExpectedEffectiveAt" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.versionExpectedEffectiveAt"></a>

```csharp
public string VersionExpectedEffectiveAt { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2FcaPolicyConfig <a name="DataAwsccEc2FcaPolicyConfig" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2FcaPolicyConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/ec2_fca_policy#id DataAwsccEc2FcaPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2FcaPolicyInstanceFcaPolicyDocument <a name="DataAwsccEc2FcaPolicyInstanceFcaPolicyDocument" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocument.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2FcaPolicyInstanceFcaPolicyDocument {

};
```


### DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications <a name="DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications {

};
```


### DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes <a name="DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes {

};
```


### DataAwsccEc2FcaPolicyNatFcaPolicyDocument <a name="DataAwsccEc2FcaPolicyNatFcaPolicyDocument" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocument.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2FcaPolicyNatFcaPolicyDocument {

};
```


### DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications <a name="DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications {

};
```


### DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes <a name="DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes {

};
```


### DataAwsccEc2FcaPolicyPcxFcaPolicyDocument <a name="DataAwsccEc2FcaPolicyPcxFcaPolicyDocument" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocument.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2FcaPolicyPcxFcaPolicyDocument {

};
```


### DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications <a name="DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications {

};
```


### DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes <a name="DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes {

};
```


### DataAwsccEc2FcaPolicyTags <a name="DataAwsccEc2FcaPolicyTags" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2FcaPolicyTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference <a name="DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes">Prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType">PrefixesType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Prefixes`<sup>Required</sup> <a name="Prefixes" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes"></a>

```csharp
public DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList Prefixes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a>

---

##### `PrefixesType`<sup>Required</sup> <a name="PrefixesType" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType"></a>

```csharp
public string PrefixesType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a>

---


### DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList <a name="DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get"></a>

```csharp
private DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference <a name="DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel">CidrLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange">CidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrLabel`<sup>Required</sup> <a name="CidrLabel" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel"></a>

```csharp
public string CidrLabel { get; }
```

- *Type:* string

---

##### `CidrRange`<sup>Required</sup> <a name="CidrRange" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange"></a>

```csharp
public string CidrRange { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>

---


### DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference <a name="DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications">CidrRangeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference">DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.dimensions">Dimensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.reportingGranularity">ReportingGranularity</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocument">DataAwsccEc2FcaPolicyInstanceFcaPolicyDocument</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrRangeSpecifications`<sup>Required</sup> <a name="CidrRangeSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications"></a>

```csharp
public DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference CidrRangeSpecifications { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference">DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a>

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.dimensions"></a>

```csharp
public string[] Dimensions { get; }
```

- *Type:* string[]

---

##### `ReportingGranularity`<sup>Required</sup> <a name="ReportingGranularity" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.reportingGranularity"></a>

```csharp
public string[] ReportingGranularity { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2FcaPolicyInstanceFcaPolicyDocument InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocument">DataAwsccEc2FcaPolicyInstanceFcaPolicyDocument</a>

---


### DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference <a name="DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes">Prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType">PrefixesType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Prefixes`<sup>Required</sup> <a name="Prefixes" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes"></a>

```csharp
public DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList Prefixes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a>

---

##### `PrefixesType`<sup>Required</sup> <a name="PrefixesType" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType"></a>

```csharp
public string PrefixesType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a>

---


### DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList <a name="DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get"></a>

```csharp
private DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference <a name="DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel">CidrLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange">CidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrLabel`<sup>Required</sup> <a name="CidrLabel" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel"></a>

```csharp
public string CidrLabel { get; }
```

- *Type:* string

---

##### `CidrRange`<sup>Required</sup> <a name="CidrRange" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange"></a>

```csharp
public string CidrRange { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>

---


### DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference <a name="DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications">CidrRangeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference">DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.property.dimensions">Dimensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.property.reportingGranularity">ReportingGranularity</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocument">DataAwsccEc2FcaPolicyNatFcaPolicyDocument</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrRangeSpecifications`<sup>Required</sup> <a name="CidrRangeSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications"></a>

```csharp
public DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference CidrRangeSpecifications { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference">DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a>

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.property.dimensions"></a>

```csharp
public string[] Dimensions { get; }
```

- *Type:* string[]

---

##### `ReportingGranularity`<sup>Required</sup> <a name="ReportingGranularity" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.property.reportingGranularity"></a>

```csharp
public string[] ReportingGranularity { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2FcaPolicyNatFcaPolicyDocument InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocument">DataAwsccEc2FcaPolicyNatFcaPolicyDocument</a>

---


### DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference <a name="DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes">Prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType">PrefixesType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Prefixes`<sup>Required</sup> <a name="Prefixes" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes"></a>

```csharp
public DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList Prefixes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a>

---

##### `PrefixesType`<sup>Required</sup> <a name="PrefixesType" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType"></a>

```csharp
public string PrefixesType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a>

---


### DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList <a name="DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get"></a>

```csharp
private DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference <a name="DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel">CidrLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange">CidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrLabel`<sup>Required</sup> <a name="CidrLabel" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel"></a>

```csharp
public string CidrLabel { get; }
```

- *Type:* string

---

##### `CidrRange`<sup>Required</sup> <a name="CidrRange" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange"></a>

```csharp
public string CidrRange { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>

---


### DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference <a name="DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications">CidrRangeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference">DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.dimensions">Dimensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.reportingGranularity">ReportingGranularity</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocument">DataAwsccEc2FcaPolicyPcxFcaPolicyDocument</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrRangeSpecifications`<sup>Required</sup> <a name="CidrRangeSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications"></a>

```csharp
public DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference CidrRangeSpecifications { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference">DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a>

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.dimensions"></a>

```csharp
public string[] Dimensions { get; }
```

- *Type:* string[]

---

##### `ReportingGranularity`<sup>Required</sup> <a name="ReportingGranularity" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.reportingGranularity"></a>

```csharp
public string[] ReportingGranularity { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2FcaPolicyPcxFcaPolicyDocument InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocument">DataAwsccEc2FcaPolicyPcxFcaPolicyDocument</a>

---


### DataAwsccEc2FcaPolicyTagsList <a name="DataAwsccEc2FcaPolicyTagsList" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2FcaPolicyTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.get"></a>

```csharp
private DataAwsccEc2FcaPolicyTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2FcaPolicyTagsOutputReference <a name="DataAwsccEc2FcaPolicyTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2FcaPolicyTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTags">DataAwsccEc2FcaPolicyTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2FcaPolicyTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTags">DataAwsccEc2FcaPolicyTags</a>

---



