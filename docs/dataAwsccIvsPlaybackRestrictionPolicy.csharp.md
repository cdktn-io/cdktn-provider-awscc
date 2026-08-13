# `dataAwsccIvsPlaybackRestrictionPolicy` Submodule <a name="`dataAwsccIvsPlaybackRestrictionPolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIvsPlaybackRestrictionPolicy <a name="DataAwsccIvsPlaybackRestrictionPolicy" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ivs_playback_restriction_policy awscc_ivs_playback_restriction_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIvsPlaybackRestrictionPolicy(Construct Scope, string Id, DataAwsccIvsPlaybackRestrictionPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig">DataAwsccIvsPlaybackRestrictionPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig">DataAwsccIvsPlaybackRestrictionPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIvsPlaybackRestrictionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIvsPlaybackRestrictionPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIvsPlaybackRestrictionPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIvsPlaybackRestrictionPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIvsPlaybackRestrictionPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccIvsPlaybackRestrictionPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIvsPlaybackRestrictionPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIvsPlaybackRestrictionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ivs_playback_restriction_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIvsPlaybackRestrictionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.allowedCountries">AllowedCountries</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.enableStrictOriginEnforcement">EnableStrictOriginEnforcement</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList">DataAwsccIvsPlaybackRestrictionPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AllowedCountries`<sup>Required</sup> <a name="AllowedCountries" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.allowedCountries"></a>

```csharp
public string[] AllowedCountries { get; }
```

- *Type:* string[]

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; }
```

- *Type:* string[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `EnableStrictOriginEnforcement`<sup>Required</sup> <a name="EnableStrictOriginEnforcement" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.enableStrictOriginEnforcement"></a>

```csharp
public IResolvable EnableStrictOriginEnforcement { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.tags"></a>

```csharp
public DataAwsccIvsPlaybackRestrictionPolicyTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList">DataAwsccIvsPlaybackRestrictionPolicyTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIvsPlaybackRestrictionPolicyConfig <a name="DataAwsccIvsPlaybackRestrictionPolicyConfig" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIvsPlaybackRestrictionPolicyConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ivs_playback_restriction_policy#id DataAwsccIvsPlaybackRestrictionPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIvsPlaybackRestrictionPolicyTags <a name="DataAwsccIvsPlaybackRestrictionPolicyTags" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIvsPlaybackRestrictionPolicyTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIvsPlaybackRestrictionPolicyTagsList <a name="DataAwsccIvsPlaybackRestrictionPolicyTagsList" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIvsPlaybackRestrictionPolicyTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.get"></a>

```csharp
private DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference <a name="DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTags">DataAwsccIvsPlaybackRestrictionPolicyTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIvsPlaybackRestrictionPolicyTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTags">DataAwsccIvsPlaybackRestrictionPolicyTags</a>

---



