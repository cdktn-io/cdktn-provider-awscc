# `dataAwsccIotwirelessNetworkAnalyzerConfiguration` Submodule <a name="`dataAwsccIotwirelessNetworkAnalyzerConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotwirelessNetworkAnalyzerConfiguration <a name="DataAwsccIotwirelessNetworkAnalyzerConfiguration" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/iotwireless_network_analyzer_configuration awscc_iotwireless_network_analyzer_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelessnetworkanalyzerconfiguration"

dataawscciotwirelessnetworkanalyzerconfiguration.NewDataAwsccIotwirelessNetworkAnalyzerConfiguration(scope Construct, id *string, config DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig) DataAwsccIotwirelessNetworkAnalyzerConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig">DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig">DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotwirelessNetworkAnalyzerConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelessnetworkanalyzerconfiguration"

dataawscciotwirelessnetworkanalyzerconfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelessnetworkanalyzerconfiguration"

dataawscciotwirelessnetworkanalyzerconfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelessnetworkanalyzerconfiguration"

dataawscciotwirelessnetworkanalyzerconfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelessnetworkanalyzerconfiguration"

dataawscciotwirelessnetworkanalyzerconfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccIotwirelessNetworkAnalyzerConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccIotwirelessNetworkAnalyzerConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccIotwirelessNetworkAnalyzerConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/iotwireless_network_analyzer_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotwirelessNetworkAnalyzerConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList">DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.traceContent">TraceContent</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference">DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.wirelessDevices">WirelessDevices</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.wirelessGateways">WirelessGateways</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.tags"></a>

```go
func Tags() DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList">DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList</a>

---

##### `TraceContent`<sup>Required</sup> <a name="TraceContent" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.traceContent"></a>

```go
func TraceContent() DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference">DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference</a>

---

##### `WirelessDevices`<sup>Required</sup> <a name="WirelessDevices" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.wirelessDevices"></a>

```go
func WirelessDevices() *[]*string
```

- *Type:* *[]*string

---

##### `WirelessGateways`<sup>Required</sup> <a name="WirelessGateways" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.wirelessGateways"></a>

```go
func WirelessGateways() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig <a name="DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelessnetworkanalyzerconfiguration"

&dataawscciotwirelessnetworkanalyzerconfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/iotwireless_network_analyzer_configuration#id DataAwsccIotwirelessNetworkAnalyzerConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotwirelessNetworkAnalyzerConfigurationTags <a name="DataAwsccIotwirelessNetworkAnalyzerConfigurationTags" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelessnetworkanalyzerconfiguration"

&dataawscciotwirelessnetworkanalyzerconfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTags {

}
```


### DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent <a name="DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelessnetworkanalyzerconfiguration"

&dataawscciotwirelessnetworkanalyzerconfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList <a name="DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelessnetworkanalyzerconfiguration"

dataawscciotwirelessnetworkanalyzerconfiguration.NewDataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.get"></a>

```go
func Get(index *f64) DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference <a name="DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelessnetworkanalyzerconfiguration"

dataawscciotwirelessnetworkanalyzerconfiguration.NewDataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTags">DataAwsccIotwirelessNetworkAnalyzerConfigurationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotwirelessNetworkAnalyzerConfigurationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTags">DataAwsccIotwirelessNetworkAnalyzerConfigurationTags</a>

---


### DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference <a name="DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotwirelessnetworkanalyzerconfiguration"

dataawscciotwirelessnetworkanalyzerconfiguration.NewDataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.logLevel">LogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.wirelessDeviceFrameInfo">WirelessDeviceFrameInfo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent">DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.logLevel"></a>

```go
func LogLevel() *string
```

- *Type:* *string

---

##### `WirelessDeviceFrameInfo`<sup>Required</sup> <a name="WirelessDeviceFrameInfo" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.wirelessDeviceFrameInfo"></a>

```go
func WirelessDeviceFrameInfo() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent">DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent</a>

---



