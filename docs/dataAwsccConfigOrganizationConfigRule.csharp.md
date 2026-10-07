# `dataAwsccConfigOrganizationConfigRule` Submodule <a name="`dataAwsccConfigOrganizationConfigRule` Submodule" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConfigOrganizationConfigRule <a name="DataAwsccConfigOrganizationConfigRule" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/config_organization_config_rule awscc_config_organization_config_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConfigOrganizationConfigRule(Construct Scope, string Id, DataAwsccConfigOrganizationConfigRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig">DataAwsccConfigOrganizationConfigRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig">DataAwsccConfigOrganizationConfigRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccConfigOrganizationConfigRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccConfigOrganizationConfigRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccConfigOrganizationConfigRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccConfigOrganizationConfigRule.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccConfigOrganizationConfigRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccConfigOrganizationConfigRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccConfigOrganizationConfigRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccConfigOrganizationConfigRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/config_organization_config_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConfigOrganizationConfigRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.excludedAccounts">ExcludedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.organizationConfigRuleArn">OrganizationConfigRuleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.organizationConfigRuleName">OrganizationConfigRuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.organizationCustomPolicyRuleMetadata">OrganizationCustomPolicyRuleMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference">DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.organizationCustomRuleMetadata">OrganizationCustomRuleMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference">DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.organizationManagedRuleMetadata">OrganizationManagedRuleMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference">DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ExcludedAccounts`<sup>Required</sup> <a name="ExcludedAccounts" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.excludedAccounts"></a>

```csharp
public string[] ExcludedAccounts { get; }
```

- *Type:* string[]

---

##### `OrganizationConfigRuleArn`<sup>Required</sup> <a name="OrganizationConfigRuleArn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.organizationConfigRuleArn"></a>

```csharp
public string OrganizationConfigRuleArn { get; }
```

- *Type:* string

---

##### `OrganizationConfigRuleName`<sup>Required</sup> <a name="OrganizationConfigRuleName" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.organizationConfigRuleName"></a>

```csharp
public string OrganizationConfigRuleName { get; }
```

- *Type:* string

---

##### `OrganizationCustomPolicyRuleMetadata`<sup>Required</sup> <a name="OrganizationCustomPolicyRuleMetadata" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.organizationCustomPolicyRuleMetadata"></a>

```csharp
public DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference OrganizationCustomPolicyRuleMetadata { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference">DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference</a>

---

##### `OrganizationCustomRuleMetadata`<sup>Required</sup> <a name="OrganizationCustomRuleMetadata" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.organizationCustomRuleMetadata"></a>

```csharp
public DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference OrganizationCustomRuleMetadata { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference">DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference</a>

---

##### `OrganizationManagedRuleMetadata`<sup>Required</sup> <a name="OrganizationManagedRuleMetadata" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.organizationManagedRuleMetadata"></a>

```csharp
public DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference OrganizationManagedRuleMetadata { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference">DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConfigOrganizationConfigRuleConfig <a name="DataAwsccConfigOrganizationConfigRuleConfig" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConfigOrganizationConfigRuleConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/config_organization_config_rule#id DataAwsccConfigOrganizationConfigRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata <a name="DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata {

};
```


### DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata <a name="DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata {

};
```


### DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata <a name="DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference <a name="DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.debugLogDeliveryAccounts">DebugLogDeliveryAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.inputParameters">InputParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypes">OrganizationConfigRuleTriggerTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.policyText">PolicyText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceIdScope">ResourceIdScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceTypesScope">ResourceTypesScope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.runtime">Runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagKeyScope">TagKeyScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagValueScope">TagValueScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DebugLogDeliveryAccounts`<sup>Required</sup> <a name="DebugLogDeliveryAccounts" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.debugLogDeliveryAccounts"></a>

```csharp
public string[] DebugLogDeliveryAccounts { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InputParameters`<sup>Required</sup> <a name="InputParameters" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.inputParameters"></a>

```csharp
public string InputParameters { get; }
```

- *Type:* string

---

##### `OrganizationConfigRuleTriggerTypes`<sup>Required</sup> <a name="OrganizationConfigRuleTriggerTypes" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypes"></a>

```csharp
public string[] OrganizationConfigRuleTriggerTypes { get; }
```

- *Type:* string[]

---

##### `PolicyText`<sup>Required</sup> <a name="PolicyText" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.policyText"></a>

```csharp
public string PolicyText { get; }
```

- *Type:* string

---

##### `ResourceIdScope`<sup>Required</sup> <a name="ResourceIdScope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceIdScope"></a>

```csharp
public string ResourceIdScope { get; }
```

- *Type:* string

---

##### `ResourceTypesScope`<sup>Required</sup> <a name="ResourceTypesScope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceTypesScope"></a>

```csharp
public string[] ResourceTypesScope { get; }
```

- *Type:* string[]

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.runtime"></a>

```csharp
public string Runtime { get; }
```

- *Type:* string

---

##### `TagKeyScope`<sup>Required</sup> <a name="TagKeyScope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagKeyScope"></a>

```csharp
public string TagKeyScope { get; }
```

- *Type:* string

---

##### `TagValueScope`<sup>Required</sup> <a name="TagValueScope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagValueScope"></a>

```csharp
public string TagValueScope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a>

---


### DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference <a name="DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.inputParameters">InputParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.lambdaFunctionArn">LambdaFunctionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypes">OrganizationConfigRuleTriggerTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceIdScope">ResourceIdScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceTypesScope">ResourceTypesScope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagKeyScope">TagKeyScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagValueScope">TagValueScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InputParameters`<sup>Required</sup> <a name="InputParameters" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.inputParameters"></a>

```csharp
public string InputParameters { get; }
```

- *Type:* string

---

##### `LambdaFunctionArn`<sup>Required</sup> <a name="LambdaFunctionArn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.lambdaFunctionArn"></a>

```csharp
public string LambdaFunctionArn { get; }
```

- *Type:* string

---

##### `MaximumExecutionFrequency`<sup>Required</sup> <a name="MaximumExecutionFrequency" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.maximumExecutionFrequency"></a>

```csharp
public string MaximumExecutionFrequency { get; }
```

- *Type:* string

---

##### `OrganizationConfigRuleTriggerTypes`<sup>Required</sup> <a name="OrganizationConfigRuleTriggerTypes" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypes"></a>

```csharp
public string[] OrganizationConfigRuleTriggerTypes { get; }
```

- *Type:* string[]

---

##### `ResourceIdScope`<sup>Required</sup> <a name="ResourceIdScope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceIdScope"></a>

```csharp
public string ResourceIdScope { get; }
```

- *Type:* string

---

##### `ResourceTypesScope`<sup>Required</sup> <a name="ResourceTypesScope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceTypesScope"></a>

```csharp
public string[] ResourceTypesScope { get; }
```

- *Type:* string[]

---

##### `TagKeyScope`<sup>Required</sup> <a name="TagKeyScope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagKeyScope"></a>

```csharp
public string TagKeyScope { get; }
```

- *Type:* string

---

##### `TagValueScope`<sup>Required</sup> <a name="TagValueScope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagValueScope"></a>

```csharp
public string TagValueScope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a>

---


### DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference <a name="DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.inputParameters">InputParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceIdScope">ResourceIdScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceTypesScope">ResourceTypesScope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.ruleIdentifier">RuleIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagKeyScope">TagKeyScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagValueScope">TagValueScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InputParameters`<sup>Required</sup> <a name="InputParameters" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.inputParameters"></a>

```csharp
public string InputParameters { get; }
```

- *Type:* string

---

##### `MaximumExecutionFrequency`<sup>Required</sup> <a name="MaximumExecutionFrequency" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.maximumExecutionFrequency"></a>

```csharp
public string MaximumExecutionFrequency { get; }
```

- *Type:* string

---

##### `ResourceIdScope`<sup>Required</sup> <a name="ResourceIdScope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceIdScope"></a>

```csharp
public string ResourceIdScope { get; }
```

- *Type:* string

---

##### `ResourceTypesScope`<sup>Required</sup> <a name="ResourceTypesScope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceTypesScope"></a>

```csharp
public string[] ResourceTypesScope { get; }
```

- *Type:* string[]

---

##### `RuleIdentifier`<sup>Required</sup> <a name="RuleIdentifier" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.ruleIdentifier"></a>

```csharp
public string RuleIdentifier { get; }
```

- *Type:* string

---

##### `TagKeyScope`<sup>Required</sup> <a name="TagKeyScope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagKeyScope"></a>

```csharp
public string TagKeyScope { get; }
```

- *Type:* string

---

##### `TagValueScope`<sup>Required</sup> <a name="TagValueScope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagValueScope"></a>

```csharp
public string TagValueScope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a>

---



